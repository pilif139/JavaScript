<script setup>
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const showError = ref(false);

const addNote = () => {
  showError.value = false;
  if (newNote.value !== "") {
    notes.value.push({
      id: notes.value.length,
      text: newNote.value,
      date: new Date().toLocaleDateString(),
      backgroundColor: "hsl(" + Math.random() * 360 + ", 100%, 75%)",
    });
    showModal.value = false;
    newNote.value = "";
  } else {
    showError.value = true;
  }
};
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p class="error" v-if="showError">Invalid input!</p>
        <button @click="addNote">Add Note</button>
        <button @click="showModal = false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="card-container">
        <div
          v-for="note in notes"
          class="card"
          :key="note.id"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
    * {
    margin: 0;
    }
    main {
    height: 100vh;
    width: 100vw;
    }
    .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
    }
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    }
    h1 {
    font-weight: bold;
    font-size: 4.5em;
    }
    header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    color: white;
    border-radius: 100%;
    font-size: 1.5em;
    }
    .card-container {
    display: flex;
    flex-wrap: wrap;
    }
    .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 20px 20px 0;
    font-size: 1.2em;
    }
    .date {
    font-weight: bold;
    font-size: 1rem;
    }
    .overlay {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    }
    .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
    }
    .modal .close {
    background-color: rgb(193, 15, 15);
    margin-top: 7px;
    }
    textarea {
    resize: none;
    }
    .error {
    color: red;
    align-self: center;
    font-weight: bold;
    }
</style>
