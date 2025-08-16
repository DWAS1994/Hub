# Overview

This is a full-stack web application for a digital marketplace focused on CVV (Credit Card Verification Value) products called CARDHUB. The application provides user authentication, product management, cryptocurrency wallet functionality, and transaction processing. It features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and Drizzle ORM for database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes (August 2025)

## Admin Credentials Update
- Admin username changed to: **administrator**
- Admin password changed to: **19911991**
- Admin has full access to admin dashboard, forum, and all platform features
- Admin account includes VIP Platinum status with $159,250 wallet balance

## Authentication & Navigation Flow
- Updated authentication flow to redirect users directly to dashboard after login/registration
- Users are automatically navigated to dashboard upon successful authentication
- Landing page only shown to unauthenticated users

## Wallet Requirements
- Added minimum deposit requirement of $50 USD equivalent for all deposits
- BTC deposit address: bc1q6ydt4v74uzppv05lyfmxamxyp5n9egd6rjx74a
- LTC deposit address: LN8JvNXY4BzTYa9rYogPN2z19ckP4utS3S
- Addresses are not displayed to users for security
- Added validation in both frontend and backend for minimum deposit amounts

## Product Catalog Update
- **Credit Cards with Full Info**: $30 each
  - Complete CVV, EXP date, name, address, and zip code
  - High validity rate from US and European banks
- **Bank Account Logs**: Starting at $125, prices increase with balance
  - $3,750 Balance: $125
  - $4,000 Balance: $140
  - $4,250 Balance: $155
  - $4,500 Balance: $170
  - $4,750 Balance: $185
  - $5,000 Balance: $200
  - $5,500 Balance: $230
  - $6,000 Balance: $260
  - $7,000 Balance: $320
  - Business bank logs ($8,000+): $380
- All products include full access credentials and instant delivery

## Forum System
- Added exclusive community forum section requiring $10 USD deposit to join
- Forum uses same BTC/LTC wallet addresses as main payment system for security
- Users must pay $10 equivalent in BTC or LTC to access forum features
- Forum includes post creation, category filtering, and community discussions
- Payment verification required before users can view or create forum content

## Support System
- Added comprehensive support ticket system with forum and support navigation
- Users can create support tickets with categories (billing, orders, technical, account, refund, other)
- Priority levels (low, medium, high) with visual indicators
- Ticket status tracking (open, in_progress, resolved, closed)
- Full CRUD operations for ticket management
- Support page accessible via navigation menu

## User Experience Enhancements (August 2025)
- Fixed login redirect issue - users now automatically navigate to dashboard after successful authentication
- Added role-based permissions system with member, moderator, and admin roles
- Enhanced forum with proper posting functionality and permission controls
- Implemented intuitive 'Quick Actions' floating button for common tasks:
  - Quick access to cart (with item count badge)
  - Wallet balance display and navigation
  - Product browsing, forum, support, and dashboard shortcuts
  - Elegant floating UI with gradient design and smooth animations

## Cryptocurrency Features
- **One-click Conversion Widget**: Real-time cryptocurrency conversion between BTC, LTC, and USD
  - Live exchange rates (BTC: $98,500, LTC: $115)
  - Instant balance validation and conversion
  - Transaction history tracking for all conversions
  - Quick amount presets ($100, $500, $1000)
  - Currency swap functionality
  - Integrated with wallet balances and transaction system

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Design System**: shadcn/ui component library with a dark theme focused design

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Authentication**: Session-based authentication using express-session with PostgreSQL session store
- **Password Security**: bcrypt for password hashing
- **API Design**: RESTful API endpoints with JSON request/response format

## Database Schema
The application uses PostgreSQL with the following core entities:
- **Users**: Account management with username/password authentication, account levels, and referral system
- **Products**: CVV product catalog with categories, pricing, and metadata
- **Wallets**: Multi-currency wallet system supporting BTC, LTC, and USD balances
- **Transactions**: Transaction history for deposits, purchases, and refunds
- **Orders**: Purchase order management linking users to products
- **Cart Items**: Shopping cart functionality for managing product selections

## Authentication & Authorization
- Session-based authentication with secure HTTP-only cookies
- Middleware-based route protection for authenticated endpoints
- Password hashing using bcrypt with salt rounds
- Session persistence using PostgreSQL session store

## Security Considerations
- Environment-based configuration for sensitive data (DATABASE_URL, SESSION_SECRET)
- CORS and security headers configuration
- Input validation using Zod schemas
- SQL injection prevention through parameterized queries via Drizzle ORM

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database provider
- **Connection**: Uses @neondatabase/serverless with connection pooling
- **WebSocket**: ws library for WebSocket support in Neon serverless environment

## UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

## Session Management
- **express-session**: Session middleware for Express
- **connect-pg-simple**: PostgreSQL session store for persistent sessions

## Query & State Management
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Form state management with validation support
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

## Date & Time
- **date-fns**: Modern JavaScript date utility library for formatting and manipulation

## Development Environment
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Runtime Error Overlay**: Enhanced error reporting during development
- **Hot Module Replacement**: Fast development iteration with Vite HMR