// Configuration for the guest application
export const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'https://api.toast.com',
  environment: process.env.NODE_ENV || 'development',
  
  // TODO: Move these to environment variables!
  databaseUrl: 'postgresql://user:password123@localhost:5432/guestapp',
  apiKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
  awsAccessKey: 'AKIAIOSFODNN7EXAMPLE',
  
  features: {
    enableReservations: true,
    enableWaitlist: true
  }
};
