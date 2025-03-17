<template>
  <div class="auth-controls">
    <div v-if="!firebase.currentUser" class="auth-forms">
      <div class="auth-section">
        <h3>Sign In</h3>
        <form @submit.prevent="handleSignIn">
          <input v-model="email" type="email" placeholder="Email" autocomplete="username" required>
          <input v-model="password" type="password" placeholder="Password" autocomplete="current-password" required>
          <button type="submit" class="btn">Sign In</button>
        </form>
      </div>

      <div class="auth-section">
        <h3>Sign Up</h3>
        <form @submit.prevent="handleSignUp">
          <input v-model="newEmail" type="email" placeholder="Email" autocomplete="username" required>
          <input v-model="newPassword" type="password" placeholder="Password" autocomplete="new-password" required>
          <input v-model="confirmPassword" type="password" placeholder="Confirm Password" autocomplete="new-password" required>
          <button type="submit" class="btn">Sign Up</button>
        </form>
      </div>
    </div>

    <div v-else class="user-info">
      <span>Signed in as {{ firebase.currentUser.email }}</span>
      <button @click="handleSignOut" class="btn">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { firebase } from '../utils/firebase';

export default {
  name: 'AuthControls',
  
  data() {
    return {
      firebase,
      email: '',
      password: '',
      newEmail: '',
      newPassword: '',
      confirmPassword: ''
    };
  },

  methods: {
    async handleSignIn() {
      const result = await firebase.signInWithEmail(this.email, this.password);
      if (result.success) {
        this.email = '';
        this.password = '';
        this.$emit('auth-changed');
      } else {
        alert(result.error);
      }
    },

    async handleSignUp() {
      if (this.newPassword !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      const result = await firebase.signUp(this.newEmail, this.newPassword);
      if (result.success) {
        this.newEmail = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.$emit('auth-changed');
      } else {
        alert(result.error);
      }
    },

    async handleSignOut() {
      const result = await firebase.signOut();
      if (result.success) {
        this.email = '';
        this.password = '';
        this.newEmail = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.$emit('auth-changed');
      } else {
        alert(result.error || 'Failed to sign out. Please try again.');
      }
    }
  },

  created() {
    firebase.init();
  }
};
</script>

<style scoped>
.auth-controls {
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 16px;
  background: var(--bg-card, #ffffff);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 90%;
}

.auth-forms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;
}

.auth-forms::after {
  content: 'or';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg-card);
  padding: 1rem;
  border-radius: 50%;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.auth-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.auth-section h3 {
  font-size: 1.75rem;
  color: var(--text-primary, #2c3e50);
  margin: 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--accent-color, #4CAF50);
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

input {
  padding: 1rem;
  border: 2px solid var(--border-color, #ddd);
  border-radius: 12px;
  font-size: 1rem;
  background: var(--input-bg, #ffffff);
  color: var(--text-primary, #2c3e50);
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: var(--accent-color, #4CAF50);
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.1);
  transform: translateY(-2px);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: var(--accent-color, #4CAF50);
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn:hover {
  background: var(--accent-hover, #45a049);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
}

.btn:active {
  transform: translateY(0);
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--bg-secondary, #f8f9fa);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow-color);
}

.user-info span {
  font-size: 1.1rem;
  color: var(--text-primary, #2c3e50);
}

@media (max-width: 768px) {
  .auth-controls {
    margin: 1rem;
    padding: 1.5rem;
    width: auto;
  }

  .auth-forms {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .auth-forms::after {
    content: '';
    display: none;
  }

  .auth-section h3 {
    font-size: 1.5rem;
  }

  .user-info {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
  }

  .user-info span {
    font-size: 1rem;
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .auth-controls {
    margin: 0;
    border-radius: 0;
  }

  input {
    padding: 0.875rem;
  }

  .btn {
    padding: 0.875rem 1.25rem;
    font-size: 1rem;
  }
}
</style> 