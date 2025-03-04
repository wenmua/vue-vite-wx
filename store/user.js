import {
	defineStore
} from "pinia"

export const useUserStore = defineStore("user", () => {
	const count = ref(0)

	function add() {
		count.value++
	}

	function subtract() {
		count.value--
	}

	return {
		count,
		add,
		subtract
	}
})