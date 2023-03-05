<template>
    <div class="flex h-screen items-center justify-center">
      <SelectBox
        placeholder="Select country"
        :options="countries"
        @selected-option="getSelectedOption"
        label="name"
        accept-type="object"
      />
    </div>
  </template>
  
  <script setup>
  const getSelectedOption = (selected) => {
    console.log("Playground : ", selected);
  };
  
  // const countries = ref([
  //   'Japan',
  //   'Korea',
  //   'England',
  //   'Singapore',
  //   'Thailand',
  //   'Myanmar',
  //   'America',
  // ])
  
//   const countries = ref([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//   ])
  
  const countries = ref([
    { id: 1, name: "Japan", code: "ja" },
    { id: 2, name: "Korea", code: "kr" },
    { id: 3, name: "England", code: "uk" },
    { id: 4, name: "Singapore", code: "sg" },
    { id: 5, name: "Thailand", code: "th" },
    { id: 6, name: "Myanmar", code: "mm" },
    { id: 7, name: "America", code: "us" },
  ]);
  </script>
  
  <style>
  
  </style>