async function fetchData(url, func) {
    const response = await fetch(url)
    let dados = await response.json()
    func(dados)
}

export default fetchData;