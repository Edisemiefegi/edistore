<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="form.title"
        label="Product Title*"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="form.price"
        type="number"
        label="Product Price *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your price',
        ]"
      />
      <q-file
        v-model="file"
        label="Choose Product Image"
        @update:modelValue="fileUpload"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getStorage,
  ref as firebaseref,
  uploadBytesResumable,
  getDownloadURL,
} from "../../firebase.js";
import { collection, addDoc, db } from "../../firebase.js";

const file = ref(null);
const form = ref({
  title: "",
  price: 0,
  imgurl: "",
});

const fileUpload = () => {
  // access filedata
  console.log(file.value);

  const storage = getStorage();

  // xyz => products/xyz.jpg
  const storageRef = firebaseref(storage, "products/" + file.value.name);

  // passing the filedata
  const uploadTask = uploadBytesResumable(storageRef, file.value);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log((form.value.imgurl = downloadURL));
      });
    }
  );
};

const onSubmit = async () => {
  console.log(form.value);

  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "edistore"), form.value);
  console.log("Document written with ID: ", docRef.id);

  form.value = {
    title: "",
    price: 0,
  };
};
</script>

<style></style>
