import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className='max-w-8xl mx-auto'>
      <Head>
        <title>Created By Chi</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-black border-y border-black py-10 lg:py-2 mx-auto'>
        <div className='px-10 space-y-5 p-10'>
          <h1 className='text-5xl text-white max-w-xl font-serif'>
            This is the official blog space for {" "}
            <span className='underline decoration-white decoration-4'>
               Created By Chi
              </span>{" "}
              where we learn, build, and explore all things creative.
          </h1>
          <h2 className='text-white'>Get started now to become a member and receive exclusive updates and promotions for demos, courses, and the latest content.</h2>
        </div>

        <img
          className='hidden md:inline-flex w-3/4 p-5 lg:h-1/3 '
          src='/pic01.png'
          alt='a black woman at the computer sipping black tea' 
        />
      </div>

      {/* Posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img 
                className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={urlFor(post.mainImage).url()!} alt='image for each post' />
              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p>
                    {post.description} by {post.author.name}
                  </p>
                </div>
                
                <img
                className='h-12 w-12 rounded-full'
                src={urlFor(post.author.image).url()!}
                alt='image for the post author' 
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name,
    image
  },
    desciption,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
