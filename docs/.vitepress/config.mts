import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kubernetes for Sysadmins",
  description: "An alternate learning path for getting started with Kubernetes",
  themeConfig: {
    logo: "assets/img/k8sys.jpg",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Basics', link: '/basics' },
      { text: 'Tutorials', link: '/tutorials' },
    ],
    sidebar: [
      {
        text: "Overview",
        link: "/overview",
      },
      {
        text: "Basics",
        items: [
          {
            text: "Distributions",
            link: "/basics/distributions",
          },
          {
            text: "Node Components",
            link: "/basics/node-components",
          },
          {
            text: "Cluster Components",
            link: "/basics/cluster-components",
          },
          {
            text: "Common Addons",
            link: "/basics/common-addons",
          },
        ]
      },
      {
        text: "Basic Resources",
        items: [
          { text: "Nodes", link: "/basics/resources/nodes" },
          { text: "Namespaces", link: "/basics/resources/namespaces" },
          { text: "Secrets", link: "/basics/resources/secrets" },
          { text: "ConfigMaps", link: "/basics/resources/configmaps" },
          { text: "Pods", link: "/basics/resources/pods" },
          { text: "Deployments", link: "/basics/resources/deployments" },
          { text: "Services", link: "/basics/resources/services" },
          { text: "Ingress", link: "/basics/resources/ingress" }
        ]
      },
      {
        text: "Tutorials",
        items: [
          {
            text: "Easy",
            items: [
              { text: "From Docker Compose to K3s", link: "/tutorials/easy/docker-compose-to-k3s" },
            ]
          },
          {
            text: "Intermediate",
            items: [
              { text: "From Docker Compose to Talos", link: "/tutorials/intermediate/docker-compose-to-talos" },
            ]
          }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
