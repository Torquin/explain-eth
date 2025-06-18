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
            <h1 className="text-4xl font-bold text-white mb-8">{t('IntroPage.intro')}</h1>
            
            <p>
              <Trans i18nKey="IntroPage.hi-if-you-have-no-idea-what-ethereum-blockchains-and-smart-contracts-are-this-is-for-you" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              {t('IntroPage.this-is-a-series-of-articles-that-tries-to-explain-the-basics-of-blockchain-in-a-simplified-way-i-do-my-best-to-avoid-heavy-math-or-programming-jargon-but-there')} <i>{t('IntroPage.will')}</i> {t('IntroPage.be-some-new-words-and-ideas-i-try-to-use-real-world-examples-when-possible-to-help-bridge-the-gap')}
            </p>
            
            <p>{t('IntroPage.for-all-the-experts-in-the-room-just-enjoy-the-animations')}</p>
            
            <p className="mb-4">
              {t('IntroPage.along-the-way-well-cover-how-blockchains')} </p>

            {/* Blockchain Capabilities List */}
            <div className="text-gray-300 leading-relaxed mb-6">
              {/* Send/Receive Money */}
              <div className="mb-4">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  <div className="flex-1 text">
                    <span className="text-blue-300">{t('IntroPage.let-us-send-and-receive-money-24-7')}</span>
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
                    <span className="text-green-300">{t('IntroPage.automatically-split-bills')}</span>
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
                    <span className="text-yellow-300">{t('IntroPage.earn-interest-on-our-dollars')}</span>
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
                    <span className="text-purple-300">{t('IntroPage.unlock-new-types-of-apps')}</span>
                  </div>
                </div>
                {/* Mobile-only quadrant */}
                <div className="mt-4 md:hidden">
                  <IntroAbstractQuadrant quadrantType={t('IntroPage.quadrants.new-apps')} />
                </div>
              </div>
            </div>

            <p>
              {t('IntroPage.and-more')} </p>

            {/* Desktop-only Abstract Quadrant Animation */}
            <div className="mb-12 hidden md:block">
              <IntroAbstractQuadrant />
            </div>

          </section>

          {/* Ethereum Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">{t('IntroPage.ethereum')}</h1>
            
            <p>
              {t('IntroPage.lets-get-started')} </p>
              
            <p>
              {t('IntroPage.what-is-ethereum-ethereum-is-a')} <Vocab>{t('IntroPage.blockchain-network')}</Vocab> {t('IntroPage.for')} <Vocab>{t('IntroPage.sending-money')}</Vocab> {t('IntroPage.and')} <Vocab>{t('IntroPage.running-apps')}</Vocab>.
            </p>

            <p>
              {t('IntroPage.what-does-that-mean')} </p>

            <p>
              {t('IntroPage.in-general-a')} <Vocab>{t('IntroPage.network')}</Vocab> {t('IntroPage.is-a-group-of-connected-things-like-a-social-network-as-long-as-something-is-in-the-network-you-can-reach-it-just-like-how-on-the-facebook-network-you-can-send-a-message-to-anyone-as-long-as-they-have-an-account')}
            </p>
            
            {/* Network Animation */}
            <div className="my-12">
              <NetworkAnimation />
            </div>

            <p>
              ({t('IntroPage.i-know-we-didnt-define')} <Vocab>{t('IntroPage.blockchain')}</Vocab> {t('IntroPage.yet-dont-worry-well-get-to-it')})
            </p>

            <p className="mb-8">
              {t('IntroPage.like-a-social-media-network-youll-need-an')} <Vocab>{t('IntroPage.account')}</Vocab> {t('IntroPage.to-get-started-using-ethereum-an-account-will-let-you-receive')} <Vocab>{t('IntroPage.money')}</Vocab>. {t('IntroPage.you-can-receive-many-types-of-digital-assets-with-your-account')}
            </p>

            <p className="mb-8">
              {t('IntroPage.lets-give-you-a-test-account-to-get-started')} </p>

            {/* Balance Component - Account Only */}
            <div className="my-12">
              <BalanceComponent className="max-w-md mx-auto" />
            </div>
            
            <p className="mb-8">
              {t('IntroPage.every-account-has-a-unique-id-called-an')} <Vocab>{t('IntroPage.address')}</Vocab>. {t('IntroPage.your-simulated-address-is')} <code className="bg-gray-800 px-2 py-1 rounded text-sm break-all">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</code>. {t('IntroPage.just-like-how-an-email-address-lets-you-receive-emails-on-the-internet-your-ethereum-address-lets-you-receive-eth-on-the-ethereum-network')}
            </p>

            <p className="mb-8">
              {t('IntroPage.what-is-eth-eth-is-the-native-currency-of-the-ethereum-network-like-bitcoin-its-another-digital-currency-that-you-can-trade-or-transfer')} </p>

            {/* ETH Showcase */}
            <div className="my-12">
              <EthShowcase />
            </div>

            <p className="mb-8">
               {t('IntroPage.here-lets-give-you-1-simulated-eth-to-get-started-below')} </p>

            {/* Balance Component */}
            <div className="my-12">
              <BalanceComponent className="max-w-md mx-auto" showReceiveAction={true} />
            </div>

            <p className="mb-8">
              {t('IntroPage.now-that-you-have-some-eth-you-can-send-it-around-to-other-people')} </p>

            <p className="mb-8">
              {t('IntroPage.lets-give-you-some-simulated-friends-to-send-money-to')} </p>

            <p className="mb-8">
              {t('IntroPage.meet-alice-bob-and-carol')} </p>

            {/* Profile Cards */}
            <div className="my-12">
              <ProfileCards recipients={['Alice', 'Bob', 'Carol']} />
            </div>

            <p className="mb-8">
              {t('IntroPage.now-try-sending-them-some-eth')} </p>

            {/* Balance Component with Send */}
            <div className="my-12">
              <BalanceComponent 
                showSendAction={true} 
                allowedRecipients={['Alice', 'Bob', 'Carol']}
                className="max-w-md mx-auto" 
              />
            </div>

            <p className="mb-8">
              {t('IntroPage.so-far-you-have-sent')} {totalAmountSent.toFixed(4)} ETH. {t('IntroPage.nice-after-sending-eth-we-get-the-pop-up-below-what-does-it-mean')}
            </p>

            {/* Dummy Transaction Modal */}
            <div className="my-12">
              <DummyTransactionModal />
            </div>

            <p className="mb-8">
              {t('IntroPage.once-it-turns-green-your-send-transaction-has-been')} <Vocab>{t('IntroPage.confirmed')}</Vocab>. {t('IntroPage.this-lets-you-know-that-it-was-successful-i-e-that-it-went-through')}
            </p>

            <p>
              {t('IntroPage.sending-money-on-ethereum-isnt-instant-its-faster-than-a-bank-transfer-no-need-to-wait-1-2-business-days-but-its-also-a-little-slower-than-venmo-or-zelle')} </p>

            <p>
              {t('IntroPage.specifically-on-ethereum-it-takes')} <Vocab>{t('IntroPage.up-to-12-seconds')}</Vocab> {t('IntroPage.to-complete-a-transaction')}
            </p>

            <p>
              {t('IntroPage.does-this-mean-we-can-only-take-one-action-on-ethereum-every-12-seconds-if-so-that-would-be-inconvenient')} </p>

            <p>
              {t('IntroPage.what-if-we-have-to-send-money-to-multiple-people-do-we-need-to-send-first-to-alice-wait-12-seconds-then-send-to-bob-wait-and-so-on')} </p>

            <p>
              {t('IntroPage.thankfully-not-quite')} </p>

            <p>
              {t('IntroPage.on-ethereum-we-can-send-out-multiple-transactions-to-different-accounts-then-in-around-12-seconds-theyll-all-happen-one-after-another-in-quick-succession')} </p>

            <p>
              {t('IntroPage.how-does-that-work-heres-an-example')} </p>

            <p className="mb-8">
              {t('IntroPage.imagine-that-were-at-a-train-station-and-we-want-to-deliver-some-packages-to-the-next-stop-if-we-have-multiple-packages-to-deliver-we-can-still-put-them-all-on-the-same-train-and-theyll-all-get-delivered-together-at-the-next-stop')} </p>

            {/* Train Animation */}
            <div className="my-12">
              <TrainAnimation />
            </div>

            <p>
              {t('IntroPage.of-course-instead-of-packages-were-sending-eth-and-instead-of-waiting-for-the-next-train-were-waiting-at-most-12-seconds-for-our-transactions-to-go-through')} </p>

            <p>
              {t('IntroPage.but-why-does-it-take-12-seconds-at-all-why-isnt-it-instant')} </p>

            <p>
              {t('IntroPage.its-because-of-something-called')} <Vocab>{t('IntroPage.block-time')}</Vocab>{t('IntroPage.on-ethereum-it-takes-about-12-seconds-for-the-network-to-create-a')} <Vocab>{t('IntroPage.block')}</Vocab>.
              <FootnoteRef id="speedup">
                  {t('IntroPage.on-average-its-probably-closer-to-6-seconds-so-the-animations-you-see-are-actually-running-at-2x-speed-but-dont-worry-about-this-too-much')} </FootnoteRef>{t('IntroPage.this-block-is-what-makes-up-the-word-blockchain')}
            </p>

            <p
              className="mb-8"
              dangerouslySetInnerHTML={{ __html: t('IntroPage.but-what-is-a-block') }}
            />

            <p className="mb-8">
              {t('IntroPage.think-of-a-block-like-a-train-in-the-animation-above-the-train-arrives-on-schedule-picks-up-everyones-transactions-then-leaves-for-its-destination')} <FootnoteRef id="tx-city">
                <a href="https://txcity.io/v/eth-btc" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                  {t('IntroPage.here')} </a> {t('IntroPage.is-an-actual-real-time-visualization-for-the-ethereum-network-if-you-are-curious')}
              </FootnoteRef>
            </p>

            <p
              className="mb-8"
              dangerouslySetInnerHTML={{ __html: t('IntroPage.lets-say-that-you-have-to-pay-alice-bob-and-carol-all-of-them-maybe-they-each-took-you-out-to-dinner-last-week') }}
            />

            <p className="mb-8">
              {t('IntroPage.try-sending-each-of-them-eth-the-send-button-will-automatically-load-the-next-recipient')} </p>

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
              {t('IntroPage.when-we-send-out-all-these-different-transactions-they-get-collected-into-a')} <Vocab>{t('IntroPage.block')}</Vocab>. {t('IntroPage.so-a-block-is-a-list-of-all-the-transactions-that-have-happened-and-a-new-block-gets-published-around-every-12-seconds')}
            </p>

            {/* Block Animation */}
            <div className="my-12">
              <BlockAnimation />
            </div>

            <p>
              {t('IntroPage.once-we-have-more-than-one-block-we-have-a')} <Vocab>{t('IntroPage.blockchain')}</Vocab>. {t('IntroPage.as-the-name-suggests-its-a-chain-of-blocks-or-an-ordered-list-of-transactions')}
            </p>

            {/* Static Blockchain Component */}
            <div className="my-12">
              <StaticBlockchain />
            </div>

            <p>
              {t('IntroPage.but-what-other-types-of-transactions-are-there-so-far-weve-only-seen-sending-and-receiving-eth')} </p>

            <p>
              {t('IntroPage.in-addition-to-sending-eth-around-we-can-also-interact-with')} <Vocab>{t('IntroPage.apps')}</Vocab> {t('IntroPage.on-the-ethereum-network-these-interactions-are-also-transactions')}
            </p>

            <p>
              {t('IntroPage.what-does-that-mean-what-does-an-app-look-like')} </p>

            <p>
              {t('IntroPage.lets-explore-the-basics-of')} <Vocab>{t('IntroPage.apps')}</Vocab>...
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
