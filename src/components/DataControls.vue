<template>
  <div class="data-controls">
    <button @click="exportData" class="btn">
      <span class="icon">📤</span> Export Data
    </button>
    <label class="btn">
      <span class="icon">📥</span> Import Data
      <input 
        type="file" 
        accept=".json"
        @change="handleImport" 
        style="display: none"
      >
    </label>
    <button @click="confirmClear" class="btn danger">
      <span class="icon">🗑️</span> Clear Data
    </button>
  </div>
</template>

<script>
import { storage } from '../utils/storage';

export default {
  name: 'DataControls',
  
  methods: {
    exportData() {
      storage.exportData();
    },
    
    async handleImport(event) {
      const file = event.target.files?.[0];
      if (!file) return;
      
      if (await storage.importData(file)) {
        alert('Data imported successfully!');
        // Emit event to refresh parent component
        this.$emit('data-imported');
      } else {
        alert('Error importing data. Please check the file format.');
      }
      // Reset the input
      event.target.value = '';
    },
    
    confirmClear() {
      if (confirm('Are you sure you want to clear all data? This cannot be undone!')) {
        storage.clear();
        this.$emit('data-cleared');
      }
    }
  }
}
</script>

<style scoped>
.data-controls {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  background: #f5f5f5;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #4CAF50;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.btn:hover {
  background: #45a049;
}

.btn.danger {
  background: #f44336;
}

.btn.danger:hover {
  background: #da190b;
}

.icon {
  font-size: 1.2rem;
}
</style> 