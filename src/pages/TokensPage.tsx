import React, { useState } from 'react'
import { useBlockchainContext } from '../contexts/BlockchainContext'
import TransactionModal from '../components/TransactionModal'
import TransactionHistoryOverlay from '../components/TransactionHistoryOverlay'
import Navigation from '../components/Navigation'
import TokenFlowAnimation from '../components/TokenFlowAnimation'
import StablecoinShowcase from '../components/StablecoinShowcase'
import VolatilityComparison from '../components/VolatilityComparison'
import TokenSpreadsheet from '../components/TokenSpreadsheet'
import MintBurnAnimation from '../components/MintBurnAnimation'
import Vocab from '../components/Vocab'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const TokensPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          
          {/* Tokens Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">{t('TokensPage.tokens')}</h1>

            <p>
              {t('TokensPage.what-is-a')} <Vocab>{t('TokensPage.token')}</Vocab>?
            </p>

            <p>
              A <Vocab>token</Vocab> {t('TokensPage.is-a-currency-that-can-be-sent-on-a-blockchain-network')}
            </p>

            <p>
              {t('TokensPage.you-can-receive-all-types-of-tokens-with-the-same')} <code className="bg-gray-800 px-2 py-1 rounded text-sm break-all">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</code> {t('TokensPage.address-theres-no-need-to-use-a-new-account-for-each-token-type')}
            </p>

            <div className="my-8">
              <TokenFlowAnimation />
            </div>

            <p>
              {t('TokensPage.all-of-our-examples-so-far-have-used-eth-but-on-the-ethereum-network-there-are-many-many-different-types-of-tokens')} </p>

            <p>
              {t('TokensPage.what-other-tokens-are-there')} </p>

            <p>
              {t('TokensPage.one-important-category-of-tokens-are-called')} <Vocab>{t('TokensPage.stablecoins')}</Vocab>. 
            </p>

            <p>
              <Vocab>{t('TokensPage.Stablecoins')}</Vocab> {t('TokensPage.are-tokens-whose-value-is-tied-to-a-currency-like-i-mentioned-earlier-these-include-tokens-which-track-the-us-dollar-and-well-focus-on-them-but-there-are-also-ones-that-track-other-real-world-currencies-like-the-euro-and-even-other-assets-like-gold-or-silver')}
            </p>

            <p>
              {t('TokensPage.two-popular-usd-stablecoins-are')} <Vocab>USDC</Vocab> US Dollar Coin, {t('TokensPage.made-by')} <a href="https://www.circle.com/" target="_blank" rel="noopener noreferrer">Circle</a>) {t('TokensPage.and')} <Vocab>USDT</Vocab> (US Dollar Tether, {t('TokensPage.made-by')} <a href="https://tether.to/" target="_blank" rel="noopener noreferrer">Tether</a>).
            </p>

            <div className="my-8">
              <StablecoinShowcase />
            </div>

            <p>
              {t('TokensPage.unlike-eth-which-has-a-fluctuating-price-depending-on-market-conditions-these-usd-stablecoins-are-always-tracking-the-us-dollar-so-1-usdc-or-1-usdt-will-always-be-redeemable-for-1-this-makes-it-great-for-payments-merchants-and-finance')} </p>

            {/* VOLATILITY COMPARISON */}
            <div className="my-8">
              <VolatilityComparison />
            </div>

            <p>
              {t('TokensPage.how-do-stablecoins-work')} </p>

            <p>
              {t('TokensPage.under-the-hood-a-company-manages-a-stablecoin-these-companies-will-put-money-into-insured-bank-accounts-or-short-dated-us-treasuries-then-for-each-1-that-they-put-in-they-will')} <Vocab>{t('TokensPage.mint')}</Vocab> {t('TokensPage.1-usd-token-on-ethereum')}
            </p>

            <p>
              <Trans i18nKey="TokensPage.what-does-minting-mean" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              {t('TokensPage.a-physical-mint-will-create-new-physical-coins-in-a-similar-way-a-digital-mint-will-create-new-digital-tokens')} </p>

            <p>
              {t('TokensPage.what-does-that-look-like')} </p>

            <p>
              {t('TokensPage.where-do-the-tokens-live')} </p>

            <p>
              {t('TokensPage.and-how-do-our-accounts-keep-track-of-everything')} </p>

            <p>
              {t('TokensPage.its-time-for-another-example')} </p>

            <p dangerouslySetInnerHTML={{ __html: t('TokensPage.imagine-the-ethereum-network-contains-a-super-big-spreadsheet') }}>
            </p>
            
            <p dangerouslySetInnerHTML={{ __html: t('TokensPage.this-spreadsheet-has-tables-for-every-token-and-every-account-ever-created-for-each-token-there-is-a-column-for-address-and-balance-this-way-we-can-keep-track-of-everyones-balances-for-every-token') }}>
            </p>

            <div className="my-8">
              <TokenSpreadsheet />
            </div>

            <p>
              {t('TokensPage.this-spreadsheet-model-helps-us-think-about-what-it-really-means-when-we-send-a-token-to-another-address-whether-its-a-person-or-a-smart-contract')} </p>

            <p>
              {t('TokensPage.a-send-means-updating-the-balance-in-the-spreadsheet-the-senders-balance-goes-down-and-the-receivers-balance-goes-up')} </p>

            <p>
              {t('TokensPage.so-if-alice-sends-bob-10-usdc-we-can-think-of-the-ethereum-network-updating-the-spreadsheet-cells-for-alice-and-bobs-accounts')} </p>

            {/* TRANSFER ANIMATION */}
            <TokenSpreadsheet
              mode="transfer-animation"
              showTokens="USDC"
              caption={t('TokensPage.when-alice-sends-10-usdc-to-bob-their-balances-in-the-spreadsheet-are-updated')}
            />

            <p>
              <Trans i18nKey="TokensPage.so-when-a-stablecoin-company-mints-tokens-they-are-sending-a-digital-message-to-the-ethereum-network-to-update-the-big-spreadsheet-so-that-their-balance-increases" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              {t('TokensPage.we-can-send-tokens-around-on-the-ethereum-network')} </p>

            <p>
              {t('TokensPage.but-how-do-we-actually-get-them-out-if-we-want-to-spend-them-somewhere-else')} </p>

            <p>
              <Trans i18nKey="TokensPage.if-at-any-point-you-want-to-cash-out-you-can-send-the-stablecoins-in-your-wallet-to-one-of-these-stablecoin-companies-and-theyll-wire-us-dollars-back-into-your-bank-account-many-other-fintech-companies-like-stripe-or-paypal-also-support-something-similar-under-the-hood-these-companies-will-burn-the-tokens-and-theyll-transfer-you-the-dollars" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              <Trans i18nKey="TokensPage.as-you-may-have-guessed-burning-is-the-opposite-of-minting-instead-of-adding-to-someones-balance-we-are-now-subtracting" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            {/* BANK MINT VS BURN */}
            <div className="my-8">
              <MintBurnAnimation />
            </div>

            <p>
              {t('TokensPage.okay-so-now-we-know-we-know-about-stablecoins-and-smart-contracts')} </p>

            <p>
              {t('TokensPage.together-we-can-build-new-types-of-apps')} </p>

            <p>
              {t('TokensPage.what-do-they-look-like')} </p>

            <p>
              {t('TokensPage.what-kinds-of-cooler-stuff-can-we-build')} </p>

            <p>
              {t('TokensPage.lets-do-a-deeper-dive-into-smart-contracts-now-with-tokens')} </p>
              

          </section>

        </article>

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
  )
}

export default TokensPage
