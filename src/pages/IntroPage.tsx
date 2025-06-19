import React, { useState } from 'react'
import { useBlockchainContext } from '../contexts/BlockchainContext'
import BalanceComponent from '../components/BalanceComponent'
import ProfileCards from '../components/ProfileCards'
import TransactionModal from '../components/TransactionModal'
import TransactionHistoryOverlay from '../components/TransactionHistoryOverlay'
import TrainAnimation from '../components/TrainAnimation'
import BlockAnimation from '../components/BlockAnimation'
import StaticBlockchain from '../components/StaticBlockchain'
import DummyTransactionModal from '../components/DummyTransactionModal'
import Navigation from '../components/Navigation'
import EthShowcase from '../components/EthShowcase'
import NetworkAnimation from '../components/NetworkAnimation'
import IntroAbstractQuadrant from '../components/IntroAbstractQuadrant'
import { FootnoteProvider, FootnoteRef, FootnoteList } from '../components/Footnote'
import Vocab from '../components/Vocab'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const IntroPage: React.FC = () => {
  const { t } = useTranslation();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  const {
    ethereumState,
    rollupState,
    transactionHistory,
    modalState,
    currentPendingTransaction,
    closeModal
  } = useBlockchainContext()

  // Calculate total amount sent from confirmed send transactions
  const totalAmountSent = transactionHistory
    .filter(tx => tx.type === 'send' && tx.status === 'confirmed')
    .reduce((total, tx) => total + tx.amount, 0)

  return (
    <FootnoteProvider>
      <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          
          {/* Intro Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">{t('IntroPage.dmj1bi34')}</h1>
            
            <p>
              <Trans i18nKey="IntroPage.629vqpym" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              <Trans i18nKey="IntroPage.3ectbee7" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>
            
            <p>{t('IntroPage.622va93a')}</p>
            
            <p className="mb-4">
              {t('IntroPage.qah5lu5d')} </p>

            {/* Blockchain Capabilities List */}
            <div className="text-gray-300 leading-relaxed mb-6">
              {/* Send/Receive Money */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <div className="flex-1 text">
                    <span className="text-blue-300">{t('IntroPage.fryusi0v')}</span>
                  </div>
                </div>
                {/* Mobile-only quadrant */}
                <div className="mt-4 md:hidden">
                  <IntroAbstractQuadrant quadrantType={t('IntroPage.quadrants.send-receive-money')} />
                </div>
              </div>

              {/* Split Bills */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <div className="flex-1 text">
                    <span className="text-green-300">{t('IntroPage.68a6o4py')}</span>
                  </div>
                </div>
                {/* Mobile-only quadrant */}
                <div className="mt-4 md:hidden">
                  <IntroAbstractQuadrant quadrantType={t('IntroPage.quadrants.split-bills')} />
                </div>
              </div>

              {/* Earn Interest */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <div className="flex-1 text">
                    <span className="text-yellow-300">{t('IntroPage.na6cko0p')}</span>
                  </div>
                </div>
                {/* Mobile-only quadrant */}
                <div className="mt-4 md:hidden">
                  <IntroAbstractQuadrant quadrantType={t('IntroPage.quadrants.earn-interest')} />
                </div>
              </div>

              {/* New Apps */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <div className="flex-1 text">
                    <span className="text-purple-300">{t('IntroPage.osoxx3ke')}</span>
                  </div>
                </div>
                {/* Mobile-only quadrant */}
                <div className="mt-4 md:hidden">
                  <IntroAbstractQuadrant quadrantType={t('IntroPage.quadrants.new-apps')} />
                </div>
              </div>
            </div>

            <p>
              {t('IntroPage.4k0v77ww')} </p>

            {/* Desktop-only Abstract Quadrant Animation */}
            <div className="mb-12 hidden md:block">
              <IntroAbstractQuadrant />
            </div>

          </section>

          {/* Ethereum Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">{t('IntroPage.6oi0pquy')}</h1>
            
            <p>
              {t('IntroPage.3cbosdjj')} </p>
              
            <p>
              <Trans i18nKey="IntroPage.doshlf6s" components={{ Vocab: <Vocab>{null}</Vocab> }} />.
            </p>

            <p>
              {t('IntroPage.4tcggelw')} </p>

            <p>
              <Trans i18nKey="IntroPage.f840xv5l" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>
            
            {/* Network Animation */}
            <div className="my-12">
              <NetworkAnimation />
            </div>

            <p>
              (<Trans i18nKey="IntroPage.ikdtibbf" components={{ Vocab: <Vocab>{null}</Vocab> }} />)
            </p>

            <p className="mb-8">
              {t('IntroPage.a9hclw7n')} <Vocab>{t('IntroPage.xxz69y3j')}</Vocab> {t('IntroPage.phjfzj0c')} <Vocab>{t('IntroPage.0d57fxhp')}</Vocab>. {t('IntroPage.hbt9r0z3')}
            </p>

            <p className="mb-8">
              {t('IntroPage.9t1nke57')} </p>

            {/* Balance Component - Account Only */}
            <div className="my-12">
              <BalanceComponent className="max-w-md mx-auto" />
            </div>
            
            <p className="mb-8">
              {t('IntroPage.ua9t9jjq')} <Vocab>{t('IntroPage.okbiiasv')}</Vocab>. {t('IntroPage.cjvqipry')} <code className="bg-gray-800 px-2 py-1 rounded text-sm break-all">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</code>. {t('IntroPage.x9so2of4')}
            </p>

            <p className="mb-8">
              {t('IntroPage.b20b6d5j')} </p>

            {/* ETH Showcase */}
            <div className="my-12">
              <EthShowcase />
            </div>

            <p className="mb-8">
               {t('IntroPage.kko6aqms')} </p>

            {/* Balance Component */}
            <div className="my-12">
              <BalanceComponent className="max-w-md mx-auto" showReceiveAction={true} />
            </div>

            <p className="mb-8">
              {t('IntroPage.0cg0yr72')} </p>

            <p className="mb-8">
              {t('IntroPage.86yfogoc')} </p>

            <p className="mb-8">
              {t('IntroPage.xix7k66k')} </p>

            {/* Profile Cards */}
            <div className="my-12">
              <ProfileCards recipients={['Alice', 'Bob', 'Carol']} />
            </div>

            <p className="mb-8">
              {t('IntroPage.yn7s495v')} </p>

            {/* Balance Component with Send */}
            <div className="my-12">
              <BalanceComponent 
                showSendAction={true} 
                allowedRecipients={['Alice', 'Bob', 'Carol']}
                className="max-w-md mx-auto" 
              />
            </div>

            <p className="mb-8">
              {t('IntroPage.o5zdf2qa')} {totalAmountSent.toFixed(4)} ETH. {t('IntroPage.sk87b2kb')}
            </p>

            {/* Dummy Transaction Modal */}
            <div className="my-12">
              <DummyTransactionModal />
            </div>

            <p className="mb-8">
              {t('IntroPage.cg6aycpv')} <Vocab>{t('IntroPage.dl5x4yw7')}</Vocab>. {t('IntroPage.9xfk19ib')}
            </p>

            <p>
              {t('IntroPage.40aeb9sj')} </p>

            <p>
              {t('IntroPage.fr0x2iz1')} <Vocab>{t('IntroPage.el7fx27n')}</Vocab> {t('IntroPage.j96pz3tg')}
            </p>

            <p>
              {t('IntroPage.tdx91hk9')} </p>

            <p>
              {t('IntroPage.ljkxis6h')} </p>

            <p>
              {t('IntroPage.y27o4xz1')} </p>

            <p>
              {t('IntroPage.c9q8j8vo')} </p>

            <p>
              {t('IntroPage.8nvl76pp')} </p>

            <p className="mb-8">
              {t('IntroPage.x3uk9e0n')} </p>

            {/* Train Animation */}
            <div className="my-12">
              <TrainAnimation />
            </div>

            <p>
              {t('IntroPage.2ou2i1u3')} </p>

            <p>
              {t('IntroPage.0im508u0')} </p>

            <p>
              {t('IntroPage.jbenm6yx')} <Vocab>{t('IntroPage.vexe6bwm')}</Vocab>{t('IntroPage.ayrtvez3')} <Vocab>{t('IntroPage.6rdivjgn')}</Vocab>.
              <FootnoteRef id="speedup">
                  {t('IntroPage.4cud51dx')} </FootnoteRef>{t('IntroPage.0s9v6pnb')}
            </p>

            <p className="mb-8">
              <Trans i18nKey="IntroPage.68rl05je" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p className="mb-8">
              {t('IntroPage.hs9vdihr')} <FootnoteRef id="tx-city">
                <a href="https://txcity.io/v/eth-btc" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  {t('IntroPage.oqgn0fxr')} </a> {t('IntroPage.oq8ddkdm')}
              </FootnoteRef>
            </p>

            <p className="mb-8">
              <Trans i18nKey="IntroPage.3245z5hn" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p className="mb-8">
              {t('IntroPage.k02oslhh')} </p>

            {/* Balance Component with Auto-Cycling Recipients */}
            <div className="my-12">
              <BalanceComponent
                showSendAction={true}
                allowedRecipients={['Alice', 'Bob', 'Carol']}
                className="max-w-md mx-auto"
                disableButtonsOnPending={false}
                autoCycleRecipients={true}
                showSentCheckmarks={true}
                componentId="intro-cycling-balance"
              />
            </div>

            <p className="mb-8">
              {t('IntroPage.eta03hnt')} <Vocab>{t('IntroPage.6rdivjgn')}</Vocab>. {t('IntroPage.i9htrcas')}
            </p>

            {/* Block Animation */}
            <div className="my-12">
              <BlockAnimation />
            </div>

            <p>
              {t('IntroPage.1z1itoyu')} <Vocab>{t('IntroPage.vtvaxxaz')}</Vocab>. {t('IntroPage.f8js7i00')}
            </p>

            {/* Static Blockchain Component */}
            <div className="my-12">
              <StaticBlockchain />
            </div>

            <p>
              {t('IntroPage.vdukoicn')} </p>

            <p>
              {t('IntroPage.576s4xi9')} <Vocab>{t('IntroPage.h6tb1fbs')}</Vocab> {t('IntroPage.mk0cc3u9')}
            </p>

            <p>
              {t('IntroPage.q024c9yz')} </p>

            <p>
              {t('IntroPage.0zof6d2k')} <Vocab>{t('IntroPage.h6tb1fbs')}</Vocab>...
            </p>

          </section>

        </article>

        {/* Footnotes */}
        <FootnoteList />

        {/* Navigation */}
        <Navigation />

      </div>

      {/* Transaction Modal */}
      {modalState.isOpen && (
        <TransactionModal
          isOpen={modalState.isOpen}
          type={modalState.type}
          message={modalState.message}
          onClose={closeModal}
          pendingTransaction={currentPendingTransaction}
        />
      )}

      {/* Transaction History Overlay */}
      <TransactionHistoryOverlay
        ethereumTransactions={transactionHistory.filter(tx => tx.chain === 'ethereum')}
        rollupTransactions={transactionHistory.filter(tx => tx.chain === 'rollup')}
        ethereumPendingCount={ethereumState.pendingTransactions}
        rollupPendingCount={rollupState.pendingTransactions}
        isOpen={isHistoryOpen}
        onToggle={() => setIsHistoryOpen(!isHistoryOpen)}
        hideRollupTab={true}
      />
      </div>
    </FootnoteProvider>
  )
}

export default IntroPage
