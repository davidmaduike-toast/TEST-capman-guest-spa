// Configuration for the guest application
export const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'https://api.toast.com',
  environment: process.env.NODE_ENV || 'development',
  
  // TODO: Move these to environment variables!
  databaseUrl: 'postgresql://user:password123@localhost:5432/guestapp',
  apiKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
  awsAccessKey: 'AKIAIOSFODNN7EXAMPLE',
  githubToken: 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  slackWebhook: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
  
  features: {
    enableReservations: true,
    enableWaitlist: true
  }
};
