<script>
export default {
  data() {
    return {
      storageLocations: [
        {
          id: 1,
          name: 'Freezer',
          icon: '❄️',
          color: '#89CFF0',
          items: [
            { id: 101, name: 'Frozen Pizza', category: 'Other', quantity: 2, unit: 'pieces', shelf: 'top' },
            { id: 102, name: 'Ice Cream', category: 'Dairy', quantity: 1, unit: 'l', shelf: 'top' },
            { id: 103, name: 'Mixed Vegetables', category: 'Fruits & Vegetables', quantity: 500, unit: 'g', shelf: 'middle' },
            { id: 104, name: 'Chicken Breast', category: 'Meat & Fish', quantity: 1, unit: 'kg', shelf: 'bottom' },
            { id: 105, name: 'Fish Fillets', category: 'Meat & Fish', quantity: 400, unit: 'g', shelf: 'bottom' }
          ]
        },
        {
          id: 2,
          name: 'Refrigerator',
          icon: '🧊',
          color: '#7CB9E8',
          items: [
            { id: 201, name: 'Milk', category: 'Dairy', quantity: 2, unit: 'l', shelf: 'top' },
            { id: 202, name: 'Cheese', category: 'Dairy', quantity: 300, unit: 'g', shelf: 'middle' },
            { id: 203, name: 'Fresh Tomatoes', category: 'Fruits & Vegetables', quantity: 6, unit: 'pieces', shelf: 'middle' },
            { id: 204, name: 'Yogurt', category: 'Dairy', quantity: 500, unit: 'g', shelf: 'top' },
            { id: 205, name: 'Orange Juice', category: 'Beverages', quantity: 1, unit: 'l', shelf: 'bottom' },
            { id: 206, name: 'Lettuce', category: 'Fruits & Vegetables', quantity: 1, unit: 'pieces', shelf: 'bottom' }
          ]
        },
        {
          id: 3,
          name: 'Pantry',
          icon: '🏷️',
          color: '#C19A6B',
          items: [
            { id: 301, name: 'Rice', category: 'Grains & Pasta', quantity: 2, unit: 'kg', shelf: 'bottom' },
            { id: 302, name: 'Pasta', category: 'Grains & Pasta', quantity: 3, unit: 'pieces', shelf: 'middle' },
            { id: 303, name: 'Canned Tomatoes', category: 'Other', quantity: 4, unit: 'pieces', shelf: 'middle' },
            { id: 304, name: 'Cereal', category: 'Grains & Pasta', quantity: 2, unit: 'pieces', shelf: 'top' },
            { id: 305, name: 'Potato Chips', category: 'Snacks', quantity: 2, unit: 'pieces', shelf: 'top' },
            { id: 306, name: 'Coffee Beans', category: 'Beverages', quantity: 500, unit: 'g', shelf: 'middle' }
          ]
        },
        {
          id: 4,
          name: 'Cupboard',
          icon: '🗄️',
          color: '#B87333',
          items: [
            { id: 401, name: 'Olive Oil', category: 'Condiments', quantity: 750, unit: 'ml', shelf: 'middle' },
            { id: 402, name: 'Salt', category: 'Condiments', quantity: 1, unit: 'kg', shelf: 'top' },
            { id: 403, name: 'Black Pepper', category: 'Condiments', quantity: 100, unit: 'g', shelf: 'top' },
            { id: 404, name: 'Cookies', category: 'Snacks', quantity: 2, unit: 'pieces', shelf: 'bottom' },
            { id: 405, name: 'Tea Bags', category: 'Beverages', quantity: 50, unit: 'pieces', shelf: 'middle' }
          ]
        }
      ],
      categories: [
        { id: 1, name: 'Fruits & Vegetables', icon: '🥬', color: '#90EE90' },
        { id: 2, name: 'Meat & Fish', icon: '🥩', color: '#FF8C94' },
        { id: 3, name: 'Dairy', icon: '🥛', color: '#FFFDD0' },
        { id: 4, name: 'Grains & Pasta', icon: '🌾', color: '#F5DEB3' },
        { id: 5, name: 'Snacks', icon: '🍪', color: '#FFB347' },
        { id: 6, name: 'Beverages', icon: '🥤', color: '#87CEEB' },
        { id: 7, name: 'Condiments', icon: '🧂', color: '#DDA0DD' },
        { id: 8, name: 'Other', icon: '📦', color: '#D3D3D3' }
      ],
      units: [
        { value: 'pieces', label: 'pieces' },
        { value: 'g', label: 'grams' },
        { value: 'kg', label: 'kilograms' },
        { value: 'ml', label: 'milliliters' },
        { value: 'l', label: 'liters' }
      ],
      selectedLocation: null,
      newItem: {
        name: '',
        category: 'Other',
        quantity: 1,
        unit: 'pieces'
      },
      isDarkMode: false,
      showThemeCustomizer: false,
      showDeleteModal: false,
      showSettingsModal: false,
      itemToDelete: null,
      customTheme: {
        accent: '#42b983',
        secondary: '#666666'
      },
      showTooltip: false,
      tooltipText: '',
      tooltipPosition: { x: 0, y: 0 },
      editingCategory: null,
      editingLocation: null,
      defaultIcons: {
        categories: ['🥬', '🥩', '🥛', '🌾', '🍪', '🥤', '🧂', '📦', '🥑', '🍖', '🧀', '🥖', '🥨', '☕', '🍯', '📝'],
        locations: ['❄️', '🧊', '🏷️', '🗄️', '🪟', '🗃️', '📥', '📦', '🏠', '🏪', '🏬', '📍']
      },
      currentView: 'inventory', // 'inventory' or 'shopping'
      shoppingList: []
    }
  },
  methods: {
    selectLocation(location) {
      this.selectedLocation = location
    },
    addItem() {
      if (!this.newItem.name.trim() || !this.selectedLocation) return
      
      const newItem = {
        id: Date.now(),
        name: this.newItem.name.trim(),
        category: this.newItem.category,
        quantity: this.newItem.quantity,
        unit: this.newItem.unit,
        shelf: this.determineShelf(this.newItem.category)
      }
      
      this.selectedLocation.items.push(newItem)
      
      // Show success tooltip
      this.showTooltipMessage('Item added successfully!', 2000)
      
      // Reset form with animation
      this.$nextTick(() => {
        const form = document.querySelector('.add-item-form')
        form.classList.add('form-reset-animation')
        setTimeout(() => form.classList.remove('form-reset-animation'), 500)
        
        this.newItem = {
          name: '',
          category: 'Other',
          quantity: 1,
          unit: 'pieces'
        }
      })
    },
    determineShelf(category) {
      // Logic to determine which shelf an item should go on based on its category
      const topShelfCategories = ['Snacks', 'Condiments']
      const bottomShelfCategories = ['Meat & Fish', 'Beverages']
      
      if (topShelfCategories.includes(category)) return 'top'
      if (bottomShelfCategories.includes(category)) return 'bottom'
      return 'middle'
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark-mode')
    },
    toggleThemeCustomizer() {
      this.showThemeCustomizer = !this.showThemeCustomizer
    },
    updateTheme() {
      document.documentElement.style.setProperty('--accent-color', this.customTheme.accent)
      document.documentElement.style.setProperty('--accent-hover', this.adjustColor(this.customTheme.accent, -20))
      document.documentElement.style.setProperty('--text-secondary', this.customTheme.secondary)
    },
    adjustColor(color, amount) {
      return color // In real implementation, would adjust the color brightness
    },
    deleteItem(item, location) {
      this.itemToDelete = { item, location }
      this.showDeleteModal = true
    },
    confirmDelete() {
      const idx = this.itemToDelete.location.items.findIndex(i => i.id === this.itemToDelete.item.id)
      if (idx !== -1) {
        this.itemToDelete.location.items.splice(idx, 1)
        this.showTooltipMessage('Item deleted successfully!', 2000)
      }
      this.showDeleteModal = false
      this.itemToDelete = null
    },
    showTooltipMessage(message, duration = 2000) {
      this.tooltipText = message
      this.showTooltip = true
      setTimeout(() => {
        this.showTooltip = false
      }, duration)
    },
    toggleSettingsModal() {
      this.showSettingsModal = !this.showSettingsModal
      this.editingCategory = null
      this.editingLocation = null
    },
    addNewCategory() {
      const newId = Math.max(...this.categories.map(c => c.id)) + 1
      this.categories.push({
        id: newId,
        name: 'New Category',
        icon: '📦',
        color: '#D3D3D3'
      })
      this.editingCategory = this.categories[this.categories.length - 1]
    },
    addNewLocation() {
      const newId = Math.max(...this.storageLocations.map(l => l.id)) + 1
      this.storageLocations.push({
        id: newId,
        name: 'New Location',
        icon: '📦',
        color: '#D3D3D3',
        items: []
      })
      this.editingLocation = this.storageLocations[this.storageLocations.length - 1]
    },
    deleteCategory(category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      if (idx !== -1) {
        this.categories.splice(idx, 1)
      }
    },
    deleteLocation(location) {
      const idx = this.storageLocations.findIndex(l => l.id === location.id)
      if (idx !== -1) {
        this.storageLocations.splice(idx, 1)
      }
    },
    startEditing(item, type) {
      if (type === 'category') {
        this.editingCategory = { ...item }
      } else {
        this.editingLocation = { ...item }
      }
    },
    saveEditing(type) {
      if (type === 'category' && this.editingCategory) {
        const idx = this.categories.findIndex(c => c.id === this.editingCategory.id)
        if (idx !== -1) {
          this.categories[idx] = { ...this.editingCategory }
        }
        this.editingCategory = null
      } else if (type === 'location' && this.editingLocation) {
        const idx = this.storageLocations.findIndex(l => l.id === this.editingLocation.id)
        if (idx !== -1) {
          this.storageLocations[idx] = { ...this.editingLocation, items: this.storageLocations[idx].items }
        }
        this.editingLocation = null
      }
    },
    getCategoryIcon(categoryName) {
      const category = this.categories.find(c => c.name === categoryName)
      return category ? category.icon : '📦'
    },
    getCategoryColor(categoryName) {
      const category = this.categories.find(c => c.name === categoryName)
      return category ? category.color : '#D3D3D3'
    },
    getShelfItems(items, shelf) {
      return items.filter(item => item.shelf === shelf)
    },
    toggleView() {
      this.currentView = this.currentView === 'inventory' ? 'shopping' : 'inventory'
    },
    moveToShoppingList(item, location) {
      const idx = location.items.findIndex(i => i.id === item.id)
      if (idx !== -1) {
        const shoppingItem = {
          ...location.items[idx],
          originalLocation: location.name
        }
        location.items.splice(idx, 1)
        this.shoppingList.push(shoppingItem)
        this.showTooltipMessage('Item added to shopping list!', 2000)
      }
    },
    moveBackToInventory(item) {
      const idx = this.shoppingList.findIndex(i => i.id === item.id)
      if (idx !== -1) {
        const location = this.storageLocations.find(l => l.name === item.originalLocation)
        if (location) {
          const { originalLocation, ...inventoryItem } = this.shoppingList[idx]
          location.items.push(inventoryItem)
          this.shoppingList.splice(idx, 1)
          this.showTooltipMessage('Item moved back to inventory!', 2000)
        }
      }
    }
  },
  mounted() {
    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleDarkMode()
    }
  }
}
</script>

<template>
  <div class="app-container">
    <header>
      <div class="header-content">
        <h1>Food Storage Manager</h1>
        <div class="header-controls">
          <button class="view-toggle-btn" @click="toggleView" :title="currentView === 'inventory' ? 'View Shopping List' : 'View Inventory'">
            {{ currentView === 'inventory' ? '🛒' : '🏠' }}
          </button>
          <button class="settings-btn" @click="toggleSettingsModal" title="Settings">
            ⚙️
          </button>
          <button class="theme-customize-btn" @click="toggleThemeCustomizer" title="Customize Theme">
            🎨
          </button>
          <button class="theme-toggle" @click="toggleDarkMode">
            {{ isDarkMode ? '🌞' : '🌙' }}
          </button>
        </div>
      </div>
    </header>
    
    <main>
      <!-- Inventory View -->
      <div v-if="currentView === 'inventory'" class="main-grid">
        <div class="storage-locations">
          <div class="locations-grid">
            <div class="location-card" 
                 v-for="location in storageLocations" 
                 :key="location.id"
                 @click="selectLocation(location)"
                 :class="[
                   { 'selected': selectedLocation === location },
                   location.name.toLowerCase()
                 ]">
              <h2><span class="location-icon">{{ location.icon }}</span>{{ location.name }}</h2>
              <div class="items-grid">
                <!-- Top Shelf -->
                <div class="shelf-section">
                  <h4>Top Shelf</h4>
                  <div class="shelf-items">
                    <div v-for="item in getShelfItems(location.items, 'top')" 
                         :key="item.id" 
                         class="food-item"
                         :class="{ 'item-delete-animation': itemToDelete?.item.id === item.id }"
                         @click="moveToShoppingList(item, location)">
                      <div class="food-item-name">{{ item.name }}</div>
                      <div class="food-item-details">
                        <span class="category-tag" :style="{ backgroundColor: getCategoryColor(item.category) }">
                          {{ getCategoryIcon(item.category) }} {{ item.category }}
                        </span>
                        <span class="quantity">{{ item.quantity }} {{ item.unit }}</span>
                      </div>
                      <button class="delete-btn" @click.stop="deleteItem(item, location)" title="Delete Item">
                        ×
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Middle Shelf -->
                <div class="shelf-section">
                  <h4>Middle Shelf</h4>
                  <div class="shelf-items">
                    <div v-for="item in getShelfItems(location.items, 'middle')" 
                         :key="item.id" 
                         class="food-item"
                         :class="{ 'item-delete-animation': itemToDelete?.item.id === item.id }"
                         @click="moveToShoppingList(item, location)">
                      <div class="food-item-name">{{ item.name }}</div>
                      <div class="food-item-details">
                        <span class="category-tag" :style="{ backgroundColor: getCategoryColor(item.category) }">
                          {{ getCategoryIcon(item.category) }} {{ item.category }}
                        </span>
                        <span class="quantity">{{ item.quantity }} {{ item.unit }}</span>
                      </div>
                      <button class="delete-btn" @click.stop="deleteItem(item, location)" title="Delete Item">
                        ×
                      </button>
                    </div>
                  </div>
                </div>
                
                <!-- Bottom Shelf -->
                <div class="shelf-section">
                  <h4>Bottom Shelf</h4>
                  <div class="shelf-items">
                    <div v-for="item in getShelfItems(location.items, 'bottom')" 
                         :key="item.id" 
                         class="food-item"
                         :class="{ 'item-delete-animation': itemToDelete?.item.id === item.id }"
                         @click="moveToShoppingList(item, location)">
                      <div class="food-item-name">{{ item.name }}</div>
                      <div class="food-item-details">
                        <span class="category-tag" :style="{ backgroundColor: getCategoryColor(item.category) }">
                          {{ getCategoryIcon(item.category) }} {{ item.category }}
                        </span>
                        <span class="quantity">{{ item.quantity }} {{ item.unit }}</span>
                      </div>
                      <button class="delete-btn" @click.stop="deleteItem(item, location)" title="Delete Item">
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="add-item-section">
          <div class="section-card">
            <h3>Add New Item</h3>
            <div class="add-item-form">
              <div class="form-row">
                <div class="input-with-icon">
                  <span class="input-icon">📝</span>
                  <input v-model="newItem.name" 
                         placeholder="Enter item name" 
                         @keyup.enter="addItem"
                         class="modern-input with-icon">
                </div>
              </div>
              
              <div class="form-row">
                <div class="select-with-preview">
                  <select v-model="newItem.category" class="modern-select with-icon">
                    <option v-for="category in categories" 
                            :key="category.id" 
                            :value="category.name">
                      {{ category.icon }} {{ category.name }}
                    </option>
                  </select>
                  <div class="category-preview" :style="{ backgroundColor: getCategoryColor(newItem.category) }">
                    {{ getCategoryIcon(newItem.category) }}
                  </div>
                </div>
              </div>
              
              <div class="form-row quantity-row">
                <div class="input-with-icon">
                  <span class="input-icon">#️⃣</span>
                  <input type="number" 
                         v-model="newItem.quantity" 
                         min="0" 
                         step="0.1" 
                         class="modern-input with-icon quantity-input">
                </div>
                
                <div class="select-with-icon">
                  <span class="input-icon">📏</span>
                  <select v-model="newItem.unit" class="modern-select with-icon unit-select">
                    <option v-for="unit in units" 
                            :key="unit.value" 
                            :value="unit.value">{{ unit.label }}</option>
                  </select>
                </div>
              </div>
              
              <button class="modern-button add-button" 
                      @click="addItem" 
                      :disabled="!selectedLocation || !newItem.name.trim()">
                <span class="button-icon">➕</span>
                Add to {{ selectedLocation?.name || 'storage' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Shopping List View -->
      <div v-else class="shopping-list-view">
        <div class="section-card">
          <h2>Shopping List</h2>
          <div class="shopping-list-container">
            <div v-if="shoppingList.length === 0" class="empty-list">
              <p>Your shopping list is empty</p>
              <p class="empty-hint">Click items in your inventory to add them here</p>
            </div>
            <div v-else class="shopping-items">
              <div v-for="item in shoppingList" 
                   :key="item.id"
                   class="shopping-item"
                   @click="moveBackToInventory(item)">
                <div class="shopping-item-content">
                  <div class="shopping-item-name">{{ item.name }}</div>
                  <div class="shopping-item-details">
                    <span class="category-tag" :style="{ backgroundColor: getCategoryColor(item.category) }">
                      {{ getCategoryIcon(item.category) }} {{ item.category }}
                    </span>
                    <span class="quantity">{{ item.quantity }} {{ item.unit }}</span>
                  </div>
                  <div class="location-tag">
                    <span class="location-icon">{{ storageLocations.find(l => l.name === item.originalLocation)?.icon }}</span>
                    {{ item.originalLocation }}
                  </div>
                </div>
                <button class="restore-btn" title="Move back to inventory">
                  ↩️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Theme Customizer Modal -->
    <div v-if="showThemeCustomizer" class="modal-overlay" @click="showThemeCustomizer = false">
      <div class="modal-content theme-customizer" @click.stop>
        <h3>Customize Theme</h3>
        <div class="color-picker-group">
          <label>
            Accent Color
            <input type="color" v-model="customTheme.accent" @input="updateTheme">
          </label>
          <label>
            Secondary Color
            <input type="color" v-model="customTheme.secondary" @input="updateTheme">
          </label>
        </div>
        <button class="modern-button" @click="showThemeCustomizer = false">Close</button>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal-overlay" @click="showDeleteModal = false">
      <div class="modal-content delete-modal" @click.stop>
        <h3>Confirm Delete</h3>
        <p>Are you sure you want to delete "{{ itemToDelete?.item.name }}"?</p>
        <div class="modal-actions">
          <button class="modern-button cancel-btn" @click="showDeleteModal = false">Cancel</button>
          <button class="modern-button delete-confirm-btn" @click="confirmDelete">Delete</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div v-if="showSettingsModal" class="modal-overlay" @click="toggleSettingsModal">
      <div class="modal-content settings-modal" @click.stop>
        <h3>Settings</h3>
        
        <div class="settings-content">
          <!-- Categories Section -->
          <div class="settings-section">
            <div class="settings-header">
              <h4>Categories</h4>
              <button class="modern-button small" @click="addNewCategory">Add New</button>
            </div>
            
            <div class="settings-items">
              <div v-for="category in categories" :key="category.id" 
                   class="settings-item"
                   :style="{ borderColor: category.color }">
                <template v-if="editingCategory?.id === category.id">
                  <div class="edit-form">
                    <input v-model="editingCategory.name" class="modern-input">
                    <div class="icon-picker">
                      <button v-for="icon in defaultIcons.categories" 
                              :key="icon"
                              class="icon-btn" 
                              @click="editingCategory.icon = icon">{{ icon }}</button>
                    </div>
                    <input type="color" v-model="editingCategory.color" class="color-picker">
                    <div class="edit-actions">
                      <button class="modern-button small" @click="saveEditing('category')">Save</button>
                      <button class="modern-button small danger" @click="editingCategory = null">Cancel</button>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <span class="item-icon">{{ category.icon }}</span>
                  <span class="item-name">{{ category.name }}</span>
                  <div class="item-actions">
                    <button class="action-btn" @click="startEditing(category, 'category')">✏️</button>
                    <button class="action-btn" @click="deleteCategory(category)" 
                            v-if="category.name !== 'Other'">🗑️</button>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- Locations Section -->
          <div class="settings-section">
            <div class="settings-header">
              <h4>Storage Locations</h4>
              <button class="modern-button small" @click="addNewLocation">Add New</button>
            </div>
            
            <div class="settings-items">
              <div v-for="location in storageLocations" :key="location.id" 
                   class="settings-item"
                   :style="{ borderColor: location.color }">
                <template v-if="editingLocation?.id === location.id">
                  <div class="edit-form">
                    <input v-model="editingLocation.name" class="modern-input">
                    <div class="icon-picker">
                      <button v-for="icon in defaultIcons.locations" 
                              :key="icon"
                              class="icon-btn" 
                              @click="editingLocation.icon = icon">{{ icon }}</button>
                    </div>
                    <input type="color" v-model="editingLocation.color" class="color-picker">
                    <div class="edit-actions">
                      <button class="modern-button small" @click="saveEditing('location')">Save</button>
                      <button class="modern-button small danger" @click="editingLocation = null">Cancel</button>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <span class="item-icon">{{ location.icon }}</span>
                  <span class="item-name">{{ location.name }}</span>
                  <div class="item-actions">
                    <button class="action-btn" @click="startEditing(location, 'location')">✏️</button>
                    <button class="action-btn" @click="deleteLocation(location)">🗑️</button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <button class="modern-button" @click="toggleSettingsModal">Close</button>
      </div>
    </div>

    <!-- Tooltip -->
    <div v-if="showTooltip" class="tooltip" :style="{ top: tooltipPosition.y + 'px', left: tooltipPosition.x + 'px' }">
      {{ tooltipText }}
    </div>
  </div>
</template>

<style>
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-card: #ffffff;
  --text-primary: #2c3e50;
  --text-secondary: #666666;
  --accent-color: #42b983;
  --accent-hover: #3aa876;
  --border-color: #e1e4e8;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --input-bg: #ffffff;
  --tag-bg: #e9ecef;
  --danger-color: #dc3545;
  --danger-hover: #c82333;
  --modal-overlay: rgba(0, 0, 0, 0.5);
}

.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-card: #333333;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --accent-color: #42b983;
  --accent-hover: #3aa876;
  --border-color: #404040;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --input-bg: #2d2d2d;
  --tag-bg: #404040;
}

body {
  margin: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.theme-toggle:hover {
  background-color: var(--bg-secondary);
}

.main-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  gap: 24px;
  margin-bottom: 40px;
  align-items: start;
}

.storage-locations {
  min-width: 0;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.add-item-section {
  position: sticky;
  top: 24px;
}

.section-card {
  height: fit-content;
}

.location-card {
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-radius: 16px;
}

.location-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-card);
  opacity: 0.85;
  z-index: 1;
}

.location-card.freezer {
  background-image: url('https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800');
}

.location-card.refrigerator {
  background-image: url('https://images.unsplash.com/photo-1536236397240-9b229a37a286?w=800');
}

.location-card.pantry {
  background-image: url('https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800');
}

.location-card.cupboard {
  background-image: url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800');
}

.location-card h2 {
  position: relative;
  z-index: 2;
  background: var(--bg-card);
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.items-grid {
  flex: 1;
  margin-top: 15px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;
  position: relative;
  z-index: 2;
}

.shelf-section {
  background: rgba(255, 255, 255, 0.8);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.shelf-section h4 {
  margin: 0 0 8px 0;
  color: var(--text-secondary);
  font-size: 0.9em;
  text-transform: uppercase;
}

.shelf-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.food-item {
  background: var(--bg-card);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  position: relative;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.food-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px var(--shadow-color);
}

.food-item-details {
  margin-top: auto;
}

.food-item-name {
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.food-item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  color: var(--text-secondary);
}

.category-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--tag-bg);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.9em;
  color: var(--text-primary);
}

.quantity {
  color: var(--accent-color);
  font-weight: 500;
}

.section-card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px var(--shadow-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.section-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--shadow-color);
}

.section-card h3 {
  font-size: 1.4em;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-primary);
}

.add-item-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 16px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.input-with-icon, .select-with-icon {
  position: relative;
  width: 100%;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2em;
  color: var(--text-secondary);
  pointer-events: none;
}

.modern-input.with-icon, .modern-select.with-icon {
  padding-left: 40px;
}

.select-with-preview {
  position: relative;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
}

.category-preview {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  transition: all 0.3s ease;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.1em;
  padding: 14px 28px;
  background: var(--accent-color);
  transition: all 0.3s ease;
}

.add-button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

.button-icon {
  font-size: 1.2em;
}

.quantity-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 1024px) {
  .main-grid {
    grid-template-columns: 1fr;
  }

  .add-item-section {
    position: static;
  }
}

@media (max-width: 768px) {
  .locations-grid {
    grid-template-columns: 1fr;
  }

  .main-grid {
    gap: 16px;
  }
}

/* Animation for form inputs */
.modern-input:focus, .modern-select:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.1);
}

h1, h2, h3 {
  color: var(--text-primary);
  margin: 0;
}

/* Remove number input spinners */
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* New Animations */
@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.form-reset-animation {
  animation: shake 0.5s ease-in-out;
}

.item-delete-animation {
  animation: slideOut 0.3s ease-in-out forwards;
}

@keyframes slideOut {
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--modal-overlay);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: var(--bg-card);
  padding: 24px;
  border-radius: 12px;
  min-width: 300px;
  max-width: 90%;
  box-shadow: 0 8px 16px var(--shadow-color);
  animation: slideIn 0.3s ease;
}

.theme-customizer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.color-picker-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.color-picker-group label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Delete Button */
.delete-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
}

.food-item {
  position: relative;
}

.food-item:hover .delete-btn {
  opacity: 1;
}

.delete-btn:hover {
  color: var(--danger-color);
  transform: scale(1.1);
}

/* Tooltip */
.tooltip {
  position: fixed;
  background: var(--bg-card);
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 8px var(--shadow-color);
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }

  .storage-locations {
    grid-template-columns: 1fr;
  }

  .items-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    flex-direction: column;
  }

  .quantity-row {
    flex-direction: row;
  }

  .modern-input, .modern-select {
    width: 100%;
  }

  .quantity-input, .unit-select {
    width: 50%;
  }

  .header-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

/* Theme Customization Button */
.theme-customize-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  margin-right: 8px;
}

.theme-customize-btn:hover {
  background-color: var(--bg-secondary);
  transform: rotate(180deg);
}

.header-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

/* Modal Actions */
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.cancel-btn {
  background: var(--text-secondary);
}

.delete-confirm-btn {
  background: var(--danger-color);
}

.delete-confirm-btn:hover {
  background: var(--danger-hover);
}

/* Settings Modal Styles */
.settings-modal {
  width: 600px;
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
}

.settings-modal > h3 {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  background: var(--bg-card);
  z-index: 2;
}

.settings-modal > .modern-button {
  margin-top: 20px;
  position: sticky;
  bottom: 0;
  background: var(--bg-card);
  z-index: 2;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);
}

.settings-content {
  flex: 1;
  overflow-y: auto;
  padding-right: 16px;
  margin-right: -16px;
  /* Scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: var(--accent-color) var(--bg-secondary);
}

.settings-content::-webkit-scrollbar {
  width: 8px;
}

.settings-content::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 4px;
}

.settings-content::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 4px;
}

.settings-section {
  margin-bottom: 24px;
  background: var(--bg-card);
}

.settings-section:last-child {
  margin-bottom: 0;
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.settings-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.settings-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: var(--bg-secondary);
  border-radius: 8px;
  border-left: 4px solid;
  transition: all 0.3s ease;
}

.settings-item:hover {
  transform: translateX(4px);
}

.item-icon {
  font-size: 1.5rem;
  margin-right: 12px;
}

.item-name {
  flex-grow: 1;
}

.item-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: var(--bg-primary);
  transform: scale(1.1);
}

.edit-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.icon-picker {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  gap: 8px;
}

.icon-btn {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  transform: scale(1.1);
  background: var(--bg-secondary);
}

.color-picker {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.modern-button.small {
  padding: 8px 16px;
  font-size: 0.9rem;
}

.modern-button.danger {
  background: var(--danger-color);
}

.modern-button.danger:hover {
  background: var(--danger-hover);
}

.settings-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  margin-right: 8px;
}

.settings-btn:hover {
  background-color: var(--bg-secondary);
  transform: rotate(90deg);
}

/* Update existing styles to use icons */
.location-card h2::before {
  content: attr(data-icon);
  margin-right: 8px;
}

.category-tag::before {
  content: attr(data-icon);
  margin-right: 4px;
}

.location-icon {
  margin-right: 8px;
  font-size: 1.2em;
}

.dark-mode .location-card::before {
  opacity: 0.92;
}

.dark-mode .shelf-section {
  background: rgba(45, 45, 45, 0.9);
}

.view-toggle-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  margin-right: 8px;
}

.view-toggle-btn:hover {
  background-color: var(--bg-secondary);
  transform: scale(1.1);
}

.shopping-list-view {
  max-width: 800px;
  margin: 0 auto;
}

.shopping-list-container {
  margin-top: 20px;
}

.empty-list {
  text-align: center;
  padding: 40px;
  color: var(--text-secondary);
}

.empty-hint {
  font-size: 0.9em;
  margin-top: 8px;
  opacity: 0.7;
}

.shopping-items {
  display: grid;
  gap: 16px;
}

.shopping-item {
  background: var(--bg-secondary);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.shopping-item:hover {
  transform: translateX(-4px);
  background: var(--bg-primary);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.shopping-item-content {
  flex: 1;
}

.shopping-item-name {
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 8px;
}

.shopping-item-details {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.location-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9em;
  color: var(--text-secondary);
  background: var(--bg-card);
  padding: 4px 8px;
  border-radius: 8px;
}

.restore-btn {
  background: none;
  border: none;
  font-size: 1.2em;
  padding: 8px;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.restore-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>