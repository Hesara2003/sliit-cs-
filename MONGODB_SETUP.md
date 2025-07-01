# MongoDB Atlas Setup Guide

Follow these steps to create a MongoDB Atlas cluster for your SLIIT CS Hub project:

## 1. Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account or log in if you already have one
3. Create a new organization (if needed)

## 2. Create a New Project

1. Click "New Project"
2. Name it "SLIIT CS Hub"
3. Add team members if needed
4. Create the project

## 3. Create a Database Cluster

1. Click "Create a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select your preferred cloud provider and region (AWS, us-east-1 recommended)
4. Name your cluster "sliit-cs-hub-cluster"
5. Click "Create Cluster"

## 4. Configure Database Access

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and secure password (save these!)
5. Set user privileges to "Read and write to any database"
6. Click "Add User"

## 5. Configure Network Access

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (0.0.0.0/0) for development
   - For production, use specific IP addresses
4. Click "Confirm"

## 6. Get Connection String

1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" as driver and version 4.1 or later
5. Copy the connection string

## 7. Update Environment Variables

1. Open `.env.local` in your project
2. Replace the MONGODB_URI with your connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@sliit-cs-hub-cluster.xxxxx.mongodb.net/sliit-cs-hub?retryWrites=true&w=majority
   ```
3. Replace `<username>` and `<password>` with your database user credentials
4. The database name `sliit-cs-hub` will be created automatically

## 8. Test the Connection

Run the following commands to test your database connection:

```bash
npm run db:setup
```

This will:
- Connect to your MongoDB Atlas cluster
- Create the necessary collections
- Insert sample data
- Verify the connection is working

## 9. Start Development Server

```bash
npm run dev
```

Your application should now be connected to MongoDB Atlas!

## Security Best Practices

### For Production:
1. **Network Access**: Restrict IP addresses to your production servers only
2. **Database Users**: Create specific users with minimal required permissions
3. **Environment Variables**: Use secure environment variable management
4. **Connection String**: Never commit connection strings to version control

### Environment Variables to Set:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `MONGODB_DB`: Database name (sliit-cs-hub)
- `NEXTAUTH_SECRET`: Random secret for authentication
- `NODE_ENV`: Set to "production" for production deployments

## Monitoring and Maintenance

1. **Atlas Dashboard**: Monitor performance, connections, and usage
2. **Backup**: Atlas provides automatic backups for M10+ clusters
3. **Alerts**: Set up alerts for database performance issues
4. **Indexes**: Monitor and optimize database indexes as your app grows

## Troubleshooting

### Common Issues:

1. **Authentication Failed**: 
   - Check username and password in connection string
   - Verify database user exists and has correct permissions

2. **Network Timeout**:
   - Check network access settings
   - Verify IP address is whitelisted

3. **Database Not Found**:
   - Database will be created automatically on first connection
   - Check MONGODB_DB environment variable

4. **Too Many Connections**:
   - Check for connection leaks in your code
   - Use connection pooling (already configured in our setup)

## Next Steps

Once your database is set up, you can:

1. **Test API Endpoints**: Try creating users via `/api/users`
2. **Add More Models**: Extend the database schema as needed
3. **Implement Authentication**: Add user authentication system
4. **Build Frontend**: Connect your React components to the API
5. **Deploy**: Deploy to Vercel, Netlify, or your preferred platform
