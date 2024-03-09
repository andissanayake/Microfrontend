# Microfrontend Architecture with Nx and Angular

This repository demonstrates a practical implementation of microfrontend architecture using Nx and Angular. It showcases how to develop web applications as a collection of smaller, independent frontend apps to improve scalability, flexibility, and speed of development.

## Overview

Microfrontend architecture extends the concepts of microservices to the frontend. This approach allows different parts of a web application to be developed, tested, and deployed independently. Our sample application includes an app-shell (the main container) and two microfrontends, focusing on distinct features or domains, along with a shared UI library to promote reusability and consistency across the platform.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/andissanayake/Microfrontend.git
cd Microfrontend
```

2. Install Nx CLI globally:

```bash
npm install -g nx
```

3. Install project dependencies:

```bash
npm install
```

4. Running the Application
   
```bash
npx nx serve app-shell
```

Navigate to http://localhost:4200/, http://localhost:4200/app-one, and http://localhost:4200/app-two to explore the microfrontends.

## Architecture Overview

This project adopts the microfrontend architecture, enabling a modular and scalable approach to web application development. The architecture is composed of several key components:

- **App Shell**: Acts as the core framework that orchestrates the loading of various microfrontends. It provides the common structure, navigation, and styles across the entire application.

- **Microfrontends**: These are independently developed features or modules (such as `app-one` and `app-two`) that come together to form the complete web application. Each microfrontend can be developed, tested, and deployed independently, focusing on a specific business domain or user interface segment.

- **UI Library**: A centralized collection of UI components that promotes consistency and reusability across the microfrontends. It helps in maintaining a uniform look and feel throughout the application while allowing developers to share and reuse UI logic and design.

## License

This project is licensed with the [MIT license](LICENSE).


