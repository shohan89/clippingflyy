
export const API_BASE_URL = 'http://localhost:5000/api'; // Change to your deployed URL in production

export const apiService = {
  async submitFreeTrial(data: { email: string, files: any[], analysis: string }) {
    // In a real app, you would use FormData for file uploads
    const response = await fetch(`${API_BASE_URL}/orders/trial`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async submitContact(data: any) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async analyzeImage(base64Data: string, mimeType: string) {
    const response = await fetch(`${API_BASE_URL}/ai/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64Data, mimeType }),
    });
    return response.json();
  },

  async getUserOrders(email: string) {
    const response = await fetch(`${API_BASE_URL}/orders?email=${email}`);
    return response.json();
  }
};
