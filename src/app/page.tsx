import Image from 'next/image';
import mfaouzi from '~/mfaouzi.jpeg';
import { TrustForFinanceLoaderLogo } from '@/components/TrustForFinanceLoaderLogo';
import LinkCard from '@/components/LinkCard';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:items-center gap-8'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 transition-all px-1 xsm:px-2 text-center pb-6 pt-8 sm:px-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-fit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-10 xlg:py-14 lg:dark:bg-zinc-800/30'>
          Bonjour cher visiteur(euse), Trust4Finance est une plateforme
          innovante dédiée à la gestion financière et à l&apos;implication des
          membres pour les associations.
        </p>
        <div className='fixed bottom-0 left-0 flex h-80 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='flex flex-col place-items-center gap-2 p-8 lg:p-0 hover:underline italic text-[0.8rem]'
            href='https://mfaouzi.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={mfaouzi}
              alt='Faouzi Mohamed'
              className='object-scover  rounded-2xl '
              width={100}
              height={30}
              priority
            />
            <span className={'text-center w-full'}>
              Ce Site créé Par Faouzi Mohamed
            </span>
          </a>
        </div>
      </div>

      <div className="relative transition-all pt-32 xsm:pt-20 xxsm:pt-10 sm:pt-4 lg:pt-0 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <TrustForFinanceLoaderLogo />
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <LinkCard
          id='official-website'
          title={'Site Officiel'}
          href={'https://trust4finance.mfaouzi.com/'}
          description='La première plateforme tout en un pour gérer votre Assossiation.'
        />
        <LinkCard
          id='instagram'
          title={'Instagram'}
          href={'https://www.instagram.com/trust4finance/'}
          description='Suivez nous sur Instagram pour plus de contenu.'
        />

        <LinkCard
          id='facebook'
          title={'Facebook'}
          href={'https://www.facebook.com/trust4finance'}
          description='Suivez nous sur Facebook pour plus de contenu.'
        />
        <LinkCard
          id='contact-email'
          title={'Email'}
          href={'mailto:trustforfinance@gmail.com'}
          description='Contactez-nous sur trustforfinance@gmail.com'
        />
      </div>
    </main>
  );
}
