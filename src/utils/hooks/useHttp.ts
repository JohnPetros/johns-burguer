export function useHttp<Response>(url: string, method: 'GET' | 'POST') {
  return async (body: unknown = '') => {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    return data as Response
  }
}