/* ===== DripDay Database Module - JSONBin.io Integration =====
 *
 * ⚠️  SETUP REQUIRED - REMEMBER, ADD YOUR API KEYS BELOW ⚠️
 *
 * 1. Create a new bin with this initial data:
 *    { "profile": null, "wardrobe": [], "history": [] }
 * 2. Copy the Bin ID and API Key from your dashboard
 * 3. Paste them in the constants below
 *
 * The app will work with localStorage as a fallback if JSONBin is not configured.
 */

const Database = {
  // ============================================
  // 🔑 ADD YOUR JSONBIN API CREDENTIALS HERE 🔑
  // ============================================
  JSONBIN_API_KEY: 'YOUR_JSONBIN_API_KEY_HERE',  // e.g. '$2a$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  JSONBIN_BIN_ID: 'YOUR_JSONBIN_BIN_ID_HERE',    // e.g. '65abc1234e6f7a0012345678'
  // ============================================

  JSONBIN_BASE_URL: 'https://api.jsonbin.io/v3',
  isConfigured: false,
  isOnline: navigator.onLine,
  syncQueue: [],

  init() {
    this.isConfigured = this.JSONBIN_API_KEY !== 'YOUR_JSONBIN_API_KEY_HERE' &&
                         this.JSONBIN_BIN_ID !== 'YOUR_JSONBIN_BIN_ID_HERE' &&
                         this.JSONBIN_API_KEY.startsWith('$2a$10$');

    if (this.isConfigured) {
      console.log('[Database] JSONBin.io configured - cloud sync enabled');
      this.setupOnlineListener();
    } else {
      console.log('[Database] JSONBin.io not configured - using localStorage only. Add your API keys in js/database.js');
    }
  },

  setupOnlineListener() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncFromCloud();
    });
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  },

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-Master-Key': this.JSONBIN_API_KEY,
      'X-Bin-Name': 'DripDay-Data'
    };
  },

  // Load data from JSONBin cloud
  async loadFromCloud() {
    if (!this.isConfigured || !this.isOnline) return null;

    try {
      const response = await fetch(`${this.JSONBIN_BASE_URL}/b/${this.JSONBIN_BIN_ID}/latest`, {
        method: 'GET',
        headers: this.getHeaders()
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      console.log('[Database] Loaded data from cloud');
      return data.record;
    } catch (err) {
      console.warn('[Database] Failed to load from cloud:', err.message);
      return null;
    }
  },

  // Save data to JSONBin cloud
  async saveToCloud(data) {
    if (!this.isConfigured || !this.isOnline) return false;

    try {
      const response = await fetch(`${this.JSONBIN_BASE_URL}/b/${this.JSONBIN_BIN_ID}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      console.log('[Database] Saved data to cloud');
      return true;
    } catch (err) {
      console.warn('[Database] Failed to save to cloud:', err.message);
      this.syncQueue.push(data);
      return false;
    }
  },

  // Sync local data with cloud
  async syncFromCloud() {
    if (!this.isConfigured) return;

    const cloudData = await this.loadFromCloud();
    if (cloudData) {
      // Merge: cloud data takes precedence if newer
      const localData = JSON.parse(localStorage.getItem('dripday_data') || '{}');
      const localTime = localData._lastModified || 0;
      const cloudTime = cloudData._lastModified || 0;

      if (cloudTime > localTime) {
        // Cloud is newer - update local
        localStorage.setItem('dripday_data', JSON.stringify(cloudData));
        console.log('[Database] Synced from cloud (cloud was newer)');
        return true;
      } else if (localTime > cloudTime) {
        // Local is newer - push to cloud
        await this.saveToCloud(localData);
        console.log('[Database] Synced to cloud (local was newer)');
        return true;
      }
    }
    return false;
  },

  // Process any queued saves
  async processSyncQueue() {
    while (this.syncQueue.length > 0) {
      const data = this.syncQueue.shift();
      await this.saveToCloud(data);
    }
  }
};
