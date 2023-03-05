<template>
  <div
    class="
      select-box-container
      rounded-md
      text-sm
      relative
    "
  >
    <div
      class="
        select-menu
        flex
        items-center
        justify-between
      "
    >
      <div>
        <input
          type="text"
          class="
            outline-none 
            rounded-md
            px-[10px]
            py-[8px]
            custom-search-input
            w-[45px]
            border-[1px] 
          border-red-500
          "
          v-model="searchKeyword"
          :placeholder="placeholder"
        />
      </div>
      <div>
        <svg
          @click="toggle"
          :class="{ 'arrow-active ': isOpen, 'arrow-not-active': !isOpen }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 absolute right-[4px] top-[12px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </div>
    <div
      v-if="forceOpen && isOpen && filterOptions?.length > 0"
      class="
        shadow-lg shadow-indigo-500/30
        border-[2px] border-gray-300
        select-options
        mt-1
        absolute
        bg-white
        rounded-md
        py-1
        w-[45px]
        overflow-hidden
      "
    >
      <div
        v-for="option in filterOptions"
        :key="getOptionKey(option)"
        @click="selected(option)"
        class="
          px-[10px]
          hover:bg-red-300
          py-[7px]
          flex
          items-center
          justify-center
        "
      >
        <div>
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg> -->
        </div>
        <div>{{ getOptionLabel(option) }}</div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: "Select an option",
    },
    options: {
        type: Array,
        default: () => [],
    },
    label: {
        type: String,
        default: "",
    },
    acceptType: {
        type: String,
        default: "object",
    },
});

const emit = defineEmits(["selectedOption"]);

const searchKeyword = ref("");
const isOpen = ref(false);
const forceOpen = ref(true);
const toggle = () => {
    isOpen.value = !isOpen.value;
    forceOpen.value == false ? (forceOpen.value = !forceOpen.value) : true;
};

watchEffect(() => {
    if (searchKeyword.value.length > 0) {
        isOpen.value = true;
    } else {
        isOpen.value = false;
    }
});

const filterOptions = computed(() => {
    if (searchKeyword.value && props.acceptType != 'number') {
        return props.options?.filter((option) =>
        props.acceptType == "object"
            ? option?.name
                .toLowerCase()
                .includes(searchKeyword.value.trim().toLowerCase())
            : option
                ?.toLowerCase()
                .includes(searchKeyword.value.trim().toLowerCase())
        );
    } else if (searchKeyword.value) {
        return props.options.filter((option) => option == searchKeyword.value)
    }
    return props.options;
});

const selected = (selected) => {
    searchKeyword.value = props.acceptType == "object" ? selected?.name : selected;
    forceOpen.value = false;
    emit("selectedOption", selected);
};

const getOptionKey = (option) => {
    if (typeof option === "object") {
        try {
            if (option.hasOwnProperty("id")) {
                return option.id;
            } else if (option.hasOwnProperty("hashid")) {
                return option.hashid;
            } else {
                return sortAndStringify(option);
            }
        } catch (e) {
            const warning =
                `[custom-select warn]: Could not stringify this option ` +
                `to generate unique key. Please provide'getOptionKey' prop ` +
                `to return a unique key for each option.\n` +
                "myozinkyaw";
            return console.warn(warning, option, e);
        }
    }

    return option;
};

const getOptionLabel = (option) => {
    if (typeof option === "object") {
        if (!option.hasOwnProperty(props.label)) {
            return console.warn(
                `[custom-select warn]: Label key "option.${props.label}" does not` +
                ` exist in options object ${JSON.stringify(option)}.\n` +
                "myozinkyaw"
            );
        }
        return option[props.label];
    }
    return option;
};

const sortAndStringify = (sortable) => {
    const ordered = {};

    Object.keys(sortable)
        .sort()
        .forEach((key) => {
        ordered[key] = sortable[key];
    });

    return JSON.stringify(ordered);
};
</script>

<style scoped>
.arrow-not-active {
  transform: rotate(0deg);
  transition: all 0.3s ease-in-out;
}
.arrow-active {
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
}
</style>