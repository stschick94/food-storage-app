<script>
import AuthControls from './components/AuthControls.vue';
import { firebase } from './utils/firebase';
import { storage } from './utils/storage';

export default {
  components: {
    AuthControls
  },
  data() {
    return {
      firebase,
      storageLocations: [
        {
          id: 1,
          name: 'Freezer',
          icon: '❄️',
          color: '#89CFF0',
          items: [
            { id: 101, name: 'Frozen Pizza', category: 'Other', quantity: 2, unit: 'pieces', shelf: 'top' },
            { id: 102, name: 'Ice Cream', category: 'Dairy', quantity: 1, unit: 'l', shelf: 'top' },
            { id: 103, name: 'Chicken Breast', category: 'Meat & Fish', quantity: 1, unit: 'kg', shelf: 'bottom' }
          ]
        },
        {
          id: 2,
          name: 'Pantry',
          icon: '🏷️',
          color: '#C19A6B',
          items: [
            { id: 301, name: 'Rice', category: 'Grains & Pasta', quantity: 2, unit: 'kg', shelf: 'bottom' },
            { id: 302, name: 'Pasta', category: 'Grains & Pasta', quantity: 3, unit: 'pieces', shelf: 'middle' }
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
      shoppingList: [],
      editingItem: {
        locationId: null,
        shelf: null,
        item: {
          name: '',
          category: 'Other',
          quantity: 1,
          unit: 'pieces'
        }
      }
    }
  },
  methods: {
    selectLocation(location) {
      this.selectedLocation = location
    },
    async addItem() {
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

      // Save data after adding item
      await this.saveData()
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
    async confirmDelete() {
      const idx = this.itemToDelete.location.items.findIndex(i => i.id === this.itemToDelete.item.id)
      if (idx !== -1) {
        this.itemToDelete.location.items.splice(idx, 1)
        this.showTooltipMessage('Item deleted successfully!', 2000)
      }
      this.showDeleteModal = false
      this.itemToDelete = null

      // Save data after deleting item
      await this.saveData()
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
    async addNewCategory() {
      const newId = Math.max(...this.categories.map(c => c.id)) + 1
      this.categories.push({
        id: newId,
        name: 'New Category',
        icon: '📦',
        color: '#D3D3D3'
      })
      this.editingCategory = this.categories[this.categories.length - 1]

      // Save data after adding category
      await this.saveData()
    },
    async addNewLocation() {
      const newId = Math.max(...this.storageLocations.map(l => l.id)) + 1
      this.storageLocations.push({
        id: newId,
        name: 'New Location',
        icon: '📦',
        color: '#D3D3D3',
        items: []
      })
      this.editingLocation = this.storageLocations[this.storageLocations.length - 1]

      // Save data after adding location
      await this.saveData()
    },
    async deleteCategory(category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      if (idx !== -1) {
        this.categories.splice(idx, 1)

        // Save data after deleting category
        await this.saveData()
      }
    },
    async deleteLocation(location) {
      const idx = this.storageLocations.findIndex(l => l.id === location.id)
      if (idx !== -1) {
        this.storageLocations.splice(idx, 1)

        // Save data after deleting location
        await this.saveData()
      }
    },
    startEditing(item, type) {
      if (type === 'category') {
        this.editingCategory = { ...item }
      } else {
        this.editingLocation = { ...item }
      }
    },
    async saveEditing(type) {
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

      // Save data after editing
      await this.saveData()
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
    async moveToShoppingList(item, location) {
      const idx = location.items.findIndex(i => i.id === item.id)
      if (idx !== -1) {
        const shoppingItem = {
          ...location.items[idx],
          originalLocation: location.name
        }
        location.items.splice(idx, 1)
        this.shoppingList.push(shoppingItem)
        this.showTooltipMessage('Item added to shopping list!', 2000)

        // Save data after moving item
        await this.saveData()
      }
    },
    async moveBackToInventory(item) {
      const idx = this.shoppingList.findIndex(i => i.id === item.id)
      if (idx !== -1) {
        const location = this.storageLocations.find(l => l.name === item.originalLocation)
        if (location) {
          const { originalLocation, ...inventoryItem } = this.shoppingList[idx]
          location.items.push(inventoryItem)
          this.shoppingList.splice(idx, 1)
          this.showTooltipMessage('Item moved back to inventory!', 2000)

          // Save data after moving item back
          await this.saveData()
        }
      }
    },
    async handleAuthChange() {
      // Update local state to match Firebase auth state
      if (this.firebase.currentUser) {
        // Load data from Firebase when user signs in
        const data = await this.firebase.loadUserData();
        if (data) {
          this.storageLocations = data.storageLocations || this.storageLocations;
          this.categories = data.categories || this.categories;
          this.shoppingList = data.shoppingList || [];
        }
        
        // Show success message
        this.showTooltipMessage('Successfully signed in!', 2000);
      } else {
        // Reset to default data when signed out
        this.storageLocations = [
          {
            id: 1,
            name: 'Freezer',
            icon: '❄️',
            color: '#89CFF0',
            items: []
          },
          {
            id: 2,
            name: 'Pantry',
            icon: '🏷️',
            color: '#C19A6B',
            items: []
          }
        ];
        this.shoppingList = [];
        
        // Show sign out message
        this.showTooltipMessage('Successfully signed out!', 2000);
      }
      
      // Force a re-render of the component
      await this.$nextTick();
      this.$forceUpdate();
    },
    async saveData() {
      if (this.firebase.currentUser) {
        const data = {
          storageLocations: this.storageLocations,
          categories: this.categories,
          shoppingList: this.shoppingList
        }
        await this.firebase.saveUserData(data)
      } else {
        // Save to localStorage when not authenticated
        storage.save({
          storageLocations: this.storageLocations,
          categories: this.categories,
          shoppingList: this.shoppingList
        })
      }
    },
    startAddingItem(locationId, shelf) {
      this.editingItem = {
        locationId,
        shelf,
        item: {
          name: '',
          category: 'Other',
          quantity: 1,
          unit: 'pieces'
        }
      }
    },
    cancelAddingItem() {
      this.editingItem = {
        locationId: null,
        shelf: null,
        item: {
          name: '',
          category: 'Other',
          quantity: 1,
          unit: 'pieces'
        }
      }
    },
    async addItemToShelf() {
      const location = this.storageLocations.find(l => l.id === this.editingItem.locationId)
      if (!location || !this.editingItem.item.name.trim()) return

      const newItem = {
        id: Date.now(),
        name: this.editingItem.item.name.trim(),
        category: this.editingItem.item.category,
        quantity: this.editingItem.item.quantity,
        unit: this.editingItem.item.unit,
        shelf: this.editingItem.shelf
      }

      location.items.push(newItem)
      this.showTooltipMessage('Item added successfully!', 2000)
      this.cancelAddingItem()
      await this.saveData()
    }
  },
  async mounted() {
    try {
      // Initialize Firebase and wait for auth state
      await this.firebase.init();
      
      // Update local state to match Firebase auth state
      if (this.firebase.currentUser) {
        const data = await this.firebase.loadUserData();
        if (data) {
          this.storageLocations = data.storageLocations || this.storageLocations;
          this.categories = data.categories || this.categories;
          this.shoppingList = data.shoppingList || [];
        }
        
        // Force initial render
        await this.$nextTick();
        this.$forceUpdate();
      } else {
        // Load data from localStorage if not authenticated
        const data = storage.load();
        if (data) {
          this.storageLocations = data.storageLocations || this.storageLocations;
          this.categories = data.categories || this.categories;
          this.shoppingList = data.shoppingList || [];
        }
      }

      // Check system preference for dark mode
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.toggleDarkMode();
      }
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }
}
</script>

<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }" role="main">
    <template v-if="!firebase.currentUser">
      <div class="welcome-section" role="region" aria-labelledby="welcome-title">
        <h1 id="welcome-title">Welcome to Food Storage Manager</h1>
        <p>Please sign in to manage your food inventory</p>
      </div>
      <AuthControls @auth-changed="handleAuthChange" />
    </template>

    <template v-else>
      <AuthControls @auth-changed="handleAuthChange" />
      <div class="app-container" role="application">
        <header role="banner">
          <div class="header-content">
            <h1>Food Storage Manager</h1>
            <nav class="header-controls" role="navigation" aria-label="Main navigation">
              <button class="view-toggle-btn" 
                      @click="toggleView" 
                      :aria-label="currentView === 'inventory' ? 'View Shopping List' : 'View Inventory'">
                {{ currentView === 'inventory' ? '🛒' : '🏠' }}
              </button>
              <button class="settings-btn" 
                      @click="toggleSettingsModal" 
                      aria-label="Settings">
                ⚙️
              </button>
              <button class="theme-customize-btn" 
                      @click="toggleThemeCustomizer" 
                      aria-label="Customize Theme">
                🎨
              </button>
              <button class="theme-toggle" 
                      @click="toggleDarkMode"
                      :aria-label="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
                {{ isDarkMode ? '🌞' : '🌙' }}
              </button>
            </nav>
          </div>
        </header>
        
        <main>
          <!-- Inventory View -->
          <div v-if="currentView === 'inventory'" class="main-grid" role="region" aria-label="Inventory management">
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
                        
                        <!-- Add Item Placeholder -->
                        <div v-if="editingItem.locationId === location.id && editingItem.shelf === 'top'"
                             class="add-item-placeholder editing">
                          <div class="add-item-form-inline">
                            <div class="form-row-inline">
                              <input v-model="editingItem.item.name"
                                     placeholder="Item name"
                                     class="modern-input"
                                     @keyup.enter="addItemToShelf">
                              <select v-model="editingItem.item.category" 
                                      class="modern-select">
                                <option v-for="category in categories" 
                                        :key="category.id" 
                                        :value="category.name">
                                  {{ category.icon }} {{ category.name }}
                                </option>
                              </select>
                            </div>
                            <div class="form-row-inline">
                              <input type="number"
                                     v-model="editingItem.item.quantity"
                                     min="0"
                                     step="0.1"
                                     class="modern-input">
                              <select v-model="editingItem.item.unit"
                                      class="modern-select">
                                <option v-for="unit in units"
                                        :key="unit.value"
                                        :value="unit.value">
                                  {{ unit.label }}
                                </option>
                              </select>
                            </div>
                            <div class="form-actions">
                              <button class="modern-button danger" @click="cancelAddingItem">Cancel</button>
                              <button class="modern-button" 
                                      @click="addItemToShelf"
                                      :disabled="!editingItem.item.name.trim()">
                                Add Item
                              </button>
                            </div>
                          </div>
                        </div>
                        <div v-else
                             class="add-item-placeholder"
                             @click="startAddingItem(location.id, 'top')">
                          <div class="placeholder-text">
                            <span class="placeholder-icon">➕</span>
                            Add Item
                          </div>
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
                        
                        <!-- Add Item Placeholder -->
                        <div v-if="editingItem.locationId === location.id && editingItem.shelf === 'middle'"
                             class="add-item-placeholder editing">
                          <div class="add-item-form-inline">
                            <div class="form-row-inline">
                              <input v-model="editingItem.item.name"
                                     placeholder="Item name"
                                     class="modern-input"
                                     @keyup.enter="addItemToShelf">
                              <select v-model="editingItem.item.category" 
                                      class="modern-select">
                                <option v-for="category in categories" 
                                        :key="category.id" 
                                        :value="category.name">
                                  {{ category.icon }} {{ category.name }}
                                </option>
                              </select>
                            </div>
                            <div class="form-row-inline">
                              <input type="number"
                                     v-model="editingItem.item.quantity"
                                     min="0"
                                     step="0.1"
                                     class="modern-input">
                              <select v-model="editingItem.item.unit"
                                      class="modern-select">
                                <option v-for="unit in units"
                                        :key="unit.value"
                                        :value="unit.value">
                                  {{ unit.label }}
                                </option>
                              </select>
                            </div>
                            <div class="form-actions">
                              <button class="modern-button danger" @click="cancelAddingItem">Cancel</button>
                              <button class="modern-button" 
                                      @click="addItemToShelf"
                                      :disabled="!editingItem.item.name.trim()">
                                Add Item
                              </button>
                            </div>
                          </div>
                        </div>
                        <div v-else
                             class="add-item-placeholder"
                             @click="startAddingItem(location.id, 'middle')">
                          <div class="placeholder-text">
                            <span class="placeholder-icon">➕</span>
                            Add Item
                          </div>
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
                        
                        <!-- Add Item Placeholder -->
                        <div v-if="editingItem.locationId === location.id && editingItem.shelf === 'bottom'"
                             class="add-item-placeholder editing">
                          <div class="add-item-form-inline">
                            <div class="form-row-inline">
                              <input v-model="editingItem.item.name"
                                     placeholder="Item name"
                                     class="modern-input"
                                     @keyup.enter="addItemToShelf">
                              <select v-model="editingItem.item.category" 
                                      class="modern-select">
                                <option v-for="category in categories" 
                                        :key="category.id" 
                                        :value="category.name">
                                  {{ category.icon }} {{ category.name }}
                                </option>
                              </select>
                            </div>
                            <div class="form-row-inline">
                              <input type="number"
                                     v-model="editingItem.item.quantity"
                                     min="0"
                                     step="0.1"
                                     class="modern-input">
                              <select v-model="editingItem.item.unit"
                                      class="modern-select">
                                <option v-for="unit in units"
                                        :key="unit.value"
                                        :value="unit.value">
                                  {{ unit.label }}
                                </option>
                              </select>
                            </div>
                            <div class="form-actions">
                              <button class="modern-button danger" @click="cancelAddingItem">Cancel</button>
                              <button class="modern-button" 
                                      @click="addItemToShelf"
                                      :disabled="!editingItem.item.name.trim()">
                                Add Item
                              </button>
                            </div>
                          </div>
                        </div>
                        <div v-else
                             class="add-item-placeholder"
                             @click="startAddingItem(location.id, 'bottom')">
                          <div class="placeholder-text">
                            <span class="placeholder-icon">➕</span>
                            Add Item
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Shopping List View -->
          <div v-else class="shopping-list-view" role="region" aria-label="Shopping list">
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
  </div>
</template>

<style>
.welcome-section {
  text-align: center;
  padding: 4rem 2rem;
  margin: 2rem auto;
  max-width: 600px;
  background: var(--bg-card);
  border-radius: 16px;
  box-shadow: 0 4px 12px var(--shadow-color);
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
}

.welcome-section p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .welcome-section h1 {
    font-size: 2rem;
  }

  .welcome-section p {
    font-size: 1.1rem;
  }
}

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
  --header-height: 60px;
  --content-max-width: 1200px;
  --spacing-unit: 1rem;
}

.dark-mode {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --bg-card: #333333;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --border-color: #404040;
  --shadow-color: rgba(0, 0, 0, 0.3);
  --input-bg: #2d2d2d;
  --tag-bg: #404040;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
}

.app-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 1rem;
  gap: 1.5rem;
}

header {
  background: var(--bg-card);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.header-content {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.header-controls button {
  background: var(--bg-secondary);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-controls button:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-1px);
}

.view-toggle-btn, .settings-btn, .theme-customize-btn, .theme-toggle {
  background: var(--bg-secondary);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-toggle-btn:hover, .settings-btn:hover, .theme-customize-btn:hover, .theme-toggle:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-1px);
}

main {
  flex: 1;
  width: 100%;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.storage-locations {
  display: grid;
  gap: 1.5rem;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.location-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px var(--shadow-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.location-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px var(--shadow-color);
}

.location-card h2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.location-icon {
  font-size: 1.5rem;
}

.shelf-section {
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.shelf-section h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.shelf-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.food-item {
  background: var(--bg-card);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px var(--shadow-color);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
}

.food-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-color);
}

.food-item-name {
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.food-item-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.85rem;
  background: var(--tag-bg);
}

.quantity {
  font-weight: 500;
  color: var(--accent-color);
}

.add-item-section .section-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px var(--shadow-color);
  border: 1px solid var(--border-color);
}

.add-item-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modern-input, .modern-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-card);
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-size: 16px; /* Prevent zoom on mobile Safari */
}

.modern-input:focus, .modern-select:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.1);
}

.modern-button {
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modern-button:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.modern-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 1200px) {
  .main-grid {
    grid-template-columns: 1fr;
  }

  .add-item-section {
    position: static;
    order: -1;
  }

  .locations-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .app-container {
    padding: 0.75rem;
  }

  .locations-grid {
    grid-template-columns: 1fr;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .shelf-items {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .app-container {
    padding: 0.5rem;
  }

  .location-card {
    padding: 1rem;
  }

  .shelf-section {
    padding: 0.75rem;
  }

  .food-item {
    padding: 0.75rem;
  }

  .shelf-items {
    grid-template-columns: 1fr;
  }
}

@media (hover: none) {
  .delete-btn {
    opacity: 1;
    background: rgba(var(--danger-color-rgb), 0.1);
  }

  .location-card:hover {
    transform: none;
  }

  .food-item:hover {
    transform: none;
  }
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
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 0.25rem;
  border-radius: 4px;
}

.food-item:hover .delete-btn {
  opacity: 1;
}

.delete-btn:hover {
  background: var(--danger-color);
  color: white;
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
  /* Cross-browser scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: var(--accent-color) var(--bg-secondary);
  -webkit-overflow-scrolling: touch;
}

/* Webkit (Safari/Chrome) scrollbar styles */
.settings-content::-webkit-scrollbar {
  width: 8px;
  background-color: var(--bg-secondary);
}

.settings-content::-webkit-scrollbar-thumb {
  background-color: var(--accent-color);
  border-radius: 4px;
}

.settings-content::-webkit-scrollbar-track {
  background-color: var(--bg-secondary);
  border-radius: 4px;
}

/* Safari-specific styles */
@supports (-webkit-overflow-scrolling: touch) {
  .settings-content {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
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

.header-content h1 {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.header-controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.header-controls button {
  background: var(--bg-secondary);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-controls button:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-1px);
}

.view-toggle-btn, .settings-btn, .theme-customize-btn, .theme-toggle {
  background: var(--bg-secondary);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-toggle-btn:hover, .settings-btn:hover, .theme-customize-btn:hover, .theme-toggle:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-1px);
}

.delete-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.25rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 0.25rem;
  border-radius: 4px;
}

.food-item:hover .delete-btn {
  opacity: 1;
}

.delete-btn:hover {
  background: var(--danger-color);
  color: white;
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 1.5rem;
  }

  .header-controls {
    justify-content: center;
    flex-wrap: wrap;
  }

  .header-controls button {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }
}

/* Add Item Placeholder */
.add-item-placeholder {
  background: var(--bg-card);
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 120px;
}

.add-item-placeholder:hover {
  border-color: var(--accent-color);
  background: var(--bg-secondary);
}

.add-item-placeholder.editing {
  border-style: solid;
  border-color: var(--accent-color);
  background: var(--bg-secondary);
}

.add-item-placeholder .placeholder-text {
  color: var(--text-secondary);
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
}

.add-item-placeholder .placeholder-icon {
  font-size: 1.5rem;
}

.add-item-form-inline {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-row-inline {
  display: flex;
  gap: 0.5rem;
}

.form-row-inline .modern-input,
.form-row-inline .modern-select {
  font-size: 0.9rem;
  padding: 0.5rem;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.form-actions button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .form-row-inline {
    flex-direction: column;
  }
}
</style>