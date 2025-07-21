# Single Sign-On with Angular, Keycloak & Spring Boot

A comprehensive implementation of Single Sign-On (SSO) authentication using Angular frontend, Keycloak as Identity Provider, and Spring Boot backend.

📘 Blog Post: [Single Sign-On with Angular 16 Keycloak 22 Spring Boot 3](https://jarmx.blogspot.com/2023/07/single-sign-on-with-angular-16-keycloak.html)

## 🏗️ Architecture Overview

This project demonstrates a modern SSO implementation with:
- **Frontend**: Angular (with keycloak-js integration)
- **Backend**: Spring Boot 3 with Spring Security
- **Identity Provider**: Keycloak 22+
- **Authentication Flow**: OAuth 2.0 / OpenID Connect

## 📚 Documentation

**Detailed Setup Guide**: [Single Sign-On with Angular 16 Keycloak 22 Spring Boot 3](https://jarmx.blogspot.com/2023/07/single-sign-on-with-angular-16-keycloak.html)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Java 17+
- Docker (for Keycloak)
- Angular CLI (`npm install -g @angular/cli`)

### 🔧 Installation & Setup

#### 1. Clone and Install Dependencies
```bash
git clone <repository-url>
cd sso-angular16-keycloak22-spring-boot3
npm install
```

#### 2. Start Keycloak Server
```bash
# Using Docker
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0 start-dev
```

#### 3. Configure Keycloak
1. Access Keycloak Admin Console: `http://localhost:8080`
2. Login with admin/admin
3. Create a new realm
4. Configure client for Angular and Spring Boot applications
5. Set up users and roles

#### 4. Environment Configuration
Update your environment files with Keycloak configuration:

**Angular** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:8080',
    realm: 'your-realm',
    clientId: 'your-angular-client'
  }
};
```

**Spring Boot** (`application.yml`):
```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8080/realms/your-realm
```

## 🛠️ Development

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload when you change source files.

### Backend Development
```bash
# In your Spring Boot project directory
./mvnw spring-boot:run
```

### Code Generation
```bash
# Generate components
ng generate component component-name

# Generate services, guards, etc.
ng generate service|guard|pipe|directive service-name
```

## 🏗️ Build & Deployment

### Build for Production
```bash
ng build --prod
```
Build artifacts will be stored in the `dist/` directory.

### Docker Deployment
```bash
# Build Docker image
docker build -t sso-angular-app .

# Run container
docker run -p 4200:80 sso-angular-app
```

## 🧪 Testing

### Unit Tests
```bash
ng test
```
Executes unit tests via [Karma](https://karma-runner.github.io).

### End-to-End Tests
```bash
ng e2e
```
Run e2e tests via your preferred testing platform.

### Security Testing
- Test authentication flows
- Verify token validation
- Check CORS configuration
- Validate logout functionality

## 🔐 Security Features

- **JWT Token Authentication**: Secure token-based authentication
- **Role-Based Access Control**: Fine-grained authorization
- **Session Management**: Proper session handling and timeout
- **CORS Configuration**: Secure cross-origin requests
- **Token Refresh**: Automatic token renewal

## 🎯 Key Components

### Angular Integration
- **Keycloak Service**: Handles authentication logic
- **Auth Guard**: Protects routes requiring authentication
- **HTTP Interceptor**: Automatically adds tokens to requests
- **Login/Logout Components**: User authentication interface

### Spring Boot Integration
- **Security Configuration**: OAuth2 resource server setup
- **JWT Validation**: Token verification and claims extraction
- **CORS Configuration**: Cross-origin request handling
- **Protected Endpoints**: Secured REST API endpoints

## 📋 Project Structure

```
src/
├── app/
│   ├── auth/              # Authentication modules
│   ├── guards/            # Route guards
│   ├── interceptors/      # HTTP interceptors
│   ├── services/          # Application services
│   └── components/        # UI components
├── environments/          # Environment configurations
└── assets/               # Static assets
```

## 🔧 Configuration Guide

### Keycloak Client Settings
- **Client Type**: Public (for Angular)
- **Valid Redirect URIs**: `http://localhost:4200/*`
- **Web Origins**: `http://localhost:4200`
- **Standard Flow Enabled**: True

### Spring Boot Security
- Configure CORS for frontend origin
- Set up JWT decoder for token validation
- Define security filter chain
- Configure authorities mapping

## 🚨 Troubleshooting

### Common Issues

**CORS Errors**:
- Verify Keycloak Web Origins configuration
- Check Spring Boot CORS settings
- Ensure proper headers in HTTP requests

**Token Validation Failures**:
- Verify issuer-uri configuration
- Check realm and client settings
- Validate JWT signature algorithms

**Authentication Redirects**:
- Confirm redirect URIs in Keycloak
- Check Angular routing configuration
- Verify environment configurations

## 🔄 Migration & Updates

### Upgrading Angular
```bash
ng update @angular/core @angular/cli
```

### Updating Keycloak
- Check breaking changes in release notes
- Update client configurations if needed
- Test authentication flows after upgrade

### Spring Boot Updates
```bash
./mvnw versions:display-dependency-updates
```

## 🆘 Support

- **Documentation**: [Angular CLI Overview](https://angular.io/cli)
- **Keycloak Docs**: [Keycloak Documentation](https://www.keycloak.org/documentation)
- **Spring Security**: [Spring Security Reference](https://docs.spring.io/spring-security/reference/)

## 🏷️ Version Information

- **Angular CLI**: 16.0.2+ (Upgradeable to latest)
- **Keycloak**: 22+
- **Spring Boot**: 3+
- **Java**: 17+
- **Node.js**: 18+

---

**Note**: This project was generated with Angular CLI version 16.0.2. For production deployments, consider upgrading to the latest Angular version for improved performance and security features.
