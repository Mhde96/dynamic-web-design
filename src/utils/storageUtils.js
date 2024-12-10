export function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key)
    return JSON.parse(data)
}

export function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}