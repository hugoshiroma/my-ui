
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/my-ui/',
  component: ComponentCreator('/my-ui/','d6b'),
  exact: true,
},
{
  path: '/my-ui/blog',
  component: ComponentCreator('/my-ui/blog','f77'),
  exact: true,
},
{
  path: '/my-ui/blog/hello-world',
  component: ComponentCreator('/my-ui/blog/hello-world','84b'),
  exact: true,
},
{
  path: '/my-ui/blog/hola',
  component: ComponentCreator('/my-ui/blog/hola','436'),
  exact: true,
},
{
  path: '/my-ui/blog/tags',
  component: ComponentCreator('/my-ui/blog/tags','7e4'),
  exact: true,
},
{
  path: '/my-ui/blog/tags/docusaurus',
  component: ComponentCreator('/my-ui/blog/tags/docusaurus','186'),
  exact: true,
},
{
  path: '/my-ui/blog/tags/facebook',
  component: ComponentCreator('/my-ui/blog/tags/facebook','016'),
  exact: true,
},
{
  path: '/my-ui/blog/tags/hello',
  component: ComponentCreator('/my-ui/blog/tags/hello','27c'),
  exact: true,
},
{
  path: '/my-ui/blog/tags/hola',
  component: ComponentCreator('/my-ui/blog/tags/hola','800'),
  exact: true,
},
{
  path: '/my-ui/blog/welcome',
  component: ComponentCreator('/my-ui/blog/welcome','38c'),
  exact: true,
},
{
  path: '/my-ui/markdown-page',
  component: ComponentCreator('/my-ui/markdown-page','5c2'),
  exact: true,
},
{
  path: '/my-ui/docs',
  component: ComponentCreator('/my-ui/docs','3c8'),
  
  routes: [
{
  path: '/my-ui/docs/intro',
  component: ComponentCreator('/my-ui/docs/intro','56f'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/my-ui/docs/tutorial-basics/congratulations','c7f'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/my-ui/docs/tutorial-basics/create-a-blog-post','91d'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/my-ui/docs/tutorial-basics/create-a-document','f7b'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/my-ui/docs/tutorial-basics/create-a-page','ab4'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/my-ui/docs/tutorial-basics/deploy-your-site','b00'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/my-ui/docs/tutorial-basics/markdown-features','e65'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/my-ui/docs/tutorial-extras/manage-docs-versions','f15'),
  exact: true,
},
{
  path: '/my-ui/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/my-ui/docs/tutorial-extras/translate-your-site','551'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
