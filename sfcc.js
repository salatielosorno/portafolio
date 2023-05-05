import { Customer, Product, Search } from 'commerce-sdk'

export default async function getProducts(searchQuery) {
  /*
  const clientConfig = {
    headers: {
      authorization: ``,
    },
    parameters: {
      clientId: process.env.SFDC_CLIENT_ID,
      secret: process.env.SFDC_SECRET,
      organizationId: process.env.SFDC_ORGANIZATIONID,
      shortCode: process.env.SFDC_SHORTCODE,
      siteId: process.env.SFDC_SITEID,
    },
  }

  const credentials = `${clientConfig.parameters.clientId}:${clientConfig.parameters.secret}`
  const base64data = Buffer.from(credentials).toString('base64')
  const headers = { Authorization: `Basic ${base64data}` }
  const client = new Customer.ShopperLogin(clientConfig)

  const shopperToken = await client.getAccessToken({
    headers,
    body: {
      grant_type: 'client_credentials',
    },
  })

  const configWithAuth = {
    ...clientConfig,
    headers: { authorization: `Bearer ${shopperToken.access_token}` },
  }

  const searchClient = new Search.ShopperSearch(configWithAuth)
  const searchResults = await searchClient.productSearch({
    parameters: { q: searchQuery },
  })

  const results = []

  const productsClient = new Product.ShopperProducts(configWithAuth)
  await Promise.all(
    searchResults.hits.map(async (product) => {
      const productResults = await productsClient.getProduct({
        parameters: {
          organizationId: clientConfig.parameters.organizationId,
          siteId: clientConfig.parameters.siteId,
          id: product.productId,
        },
      })

      results.push(productResults)
    })
  )
  */
  console.log('searchQuery >> ', searchQuery)
  const products = [
    {
      id: '001',
      imageGroups: [{ images: [{ link: '/sofy/images/merlina.jpeg' }] }],
      name: 'Merlina',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Merlina, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '002',
      imageGroups: [{ images: [{ link: '/sofy/images/shinobu.jpeg' }] }],
      name: 'Shinobu',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Shinobu, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '003',
      imageGroups: [{ images: [{ link: '/sofy/images/pikachu.jpeg' }] }],
      name: 'Pikachu',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Pikachu, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '004',
      imageGroups: [{ images: [{ link: '/sofy/images/birthday.jpeg' }] }],
      name: 'Birthday',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Birthday, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '005',
      imageGroups: [{ images: [{ link: '/sofy/images/tio-cosa.jpeg' }] }],
      name: 'Tío Cosa',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Tío Cosa, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '006',
      imageGroups: [{ images: [{ link: '/sofy/images/my-little-pony.jpeg' }] }],
      name: 'My Little Pony',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata My Little Pony, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '007',
      imageGroups: [{ images: [{ link: '/sofy/images/guitar.jpeg' }] }],
      name: 'Guitar',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Guitarny, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '008',
      imageGroups: [{ images: [{ link: '/sofy/images/princesa-sofia.jpeg' }] }],
      name: 'Princesa Sofia',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Princesa Sofia, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '009',
      imageGroups: [{ images: [{ link: '/sofy/images/princesas-disney.jpeg' }] }],
      name: 'Princesas Disney',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Princesas Disney, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '010',
      imageGroups: [{ images: [{ link: '/sofy/images/unicornio.jpeg' }] }],
      name: 'Unicornio',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Unicornio, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '011',
      imageGroups: [{ images: [{ link: '/sofy/images/catrina.jpeg' }] }],
      name: 'Catrina',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Catrina, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '012',
      imageGroups: [{ images: [{ link: '/sofy/images/pony.jpeg' }] }],
      name: 'Pony',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Pony, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '013',
      imageGroups: [{ images: [{ link: '/sofy/images/sirenita.jpeg' }] }],
      name: 'La Sirenita',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata La Sinerita, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '014',
      imageGroups: [{ images: [{ link: '/sofy/images/mariachi.jpeg' }] }],
      name: 'Mariachi',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Mariachi, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '015',
      imageGroups: [{ images: [{ link: '/sofy/images/gallinita.jpeg' }] }],
      name: 'Gallinita',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Gallinita, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '016',
      imageGroups: [{ images: [{ link: '/sofy/images/reno.jpeg' }] }],
      name: 'Rodolfo',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Rodolfo, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '017',
      imageGroups: [{ images: [{ link: '/sofy/images/snow-man.jpeg' }] }],
      name: 'Muñeco de nieve',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Muñeco de nieve, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '018',
      imageGroups: [{ images: [{ link: '/sofy/images/bautizo.jpeg' }] }],
      name: 'Mi Bautizo',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Bautizo, hecha con material de la más alta calidad. Ideal para bautizo.'
    },
    {
      id: '019',
      imageGroups: [{ images: [{ link: '/sofy/images/varios-1.jpeg' }] }],
      name: 'Varios',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Varios, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '020',
      imageGroups: [{ images: [{ link: '/sofy/images/varios-2.jpeg' }] }],
      name: 'Varios',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Varios, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    }
  ]

  console.log('searchQuery >> ', searchQuery)
  if (searchQuery !== 'coffee') {
    return products.filter((item) => item.id === searchQuery);
  }

  return products
}
