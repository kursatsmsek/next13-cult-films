const API_URL = "https://cult-films-web-service.herokuapp.com"

export const getCultMovies = async () => {
  const response = await fetch(`${API_URL}/api/v1/cult-movies`)

  return response.json()
}

export const getAdvicedMovies = async () => {
  const response = await fetch(`${API_URL}/api/v1/developer-advices`)

  return response.json()
}
