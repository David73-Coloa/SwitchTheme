const button = document.querySelector("button")
let state = localStorage.getItem("isLightTheme") || false
removeAndAddTheme("dark-theme","light-theme")
function changeTheme() {
   state = !state
   localStorage.setItem("isLightTheme", state)
   if (state) return removeAndAddTheme("dark-theme","light-theme")
   removeAndAddTheme("light-theme","dark-theme")
}

function removeAndAddTheme(themeToRemove,themeToAdd) {
   document.body.classList.remove(themeToRemove)
   document.body.classList.add(themeToAdd)
}
