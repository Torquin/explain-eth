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
            <h1 className="text-4xl font-bold text-white mb-8">{t('TokensPage.ft3itozj')}</h1>

            <p>
              {t('TokensPage.6e2m7pgp')} <Vocab>{t('TokensPage.sixvtspn')}</Vocab>?
            </p>

            <p>
              A <Vocab>token</Vocab> {t('TokensPage.z8d0f7sy')}
            </p>

            <p>
              {t('TokensPage.q9zkaa3z')} <code className="bg-gray-800 px-2 py-1 rounded text-sm break-all">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</code> {t('TokensPage.jl2dz2hg')}
            </p>

            <div className="my-8">
              <TokenFlowAnimation />
            </div>

            <p>
              {t('TokensPage.e7u5u0rj')} </p>

            <p>
              {t('TokensPage.w8qchegj')} </p>

            <p>
              {t('TokensPage.rprepkgp')} <Vocab>{t('TokensPage.zt3up59s')}</Vocab>. 
            </p>

            <p>
              <Vocab>{t('TokensPage.fn78zz89')}</Vocab> {t('TokensPage.dzcbmaer')}
            </p>

            <p>
              {t('TokensPage.szsg7bmx')} <Vocab>USDC</Vocab> US Dollar Coin, {t('TokensPage.bckmm4fx')} <a href="https://www.circle.com/" target="_blank" rel="noopener noreferrer">Circle</a>) {t('TokensPage.sjeyhirc')} <Vocab>USDT</Vocab> (US Dollar Tether, {t('TokensPage.bckmm4fx')} <a href="https://tether.to/" target="_blank" rel="noopener noreferrer">Tether</a>).
            </p>

            <div className="my-8">
              <StablecoinShowcase />
            </div>

            <p>
              {t('TokensPage.jezfxs0e')} </p>

            {/* VOLATILITY COMPARISON */}
            <div className="my-8">
              <VolatilityComparison />
            </div>

            <p>
              {t('TokensPage.7a1u12fk')} </p>

            <p>
              {t('TokensPage.k1xhwqp5')} <Vocab>{t('TokensPage.n347sl9h')}</Vocab> {t('TokensPage.ferovuzc')}
            </p>

            <p>
              <Trans i18nKey="TokensPage.xqh9vn91" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              {t('TokensPage.hy7k3t60')} </p>

            <p>
              {t('TokensPage.h3wp6age')} </p>

            <p>
              {t('TokensPage.t1ky9e9l')} </p>

            <p>
              {t('TokensPage.yzktxjr7')} </p>

            <p>
              {t('TokensPage.ctj64ccz')} </p>

            <p dangerouslySetInnerHTML={{ __html: t('TokensPage.hgktl338') }}>
            </p>
            
            <p dangerouslySetInnerHTML={{ __html: t('TokensPage.89ozdctc') }}>
            </p>

            <div className="my-8">
              <TokenSpreadsheet />
            </div>

            <p>
              {t('TokensPage.yp8hkx14')} </p>

            <p>
              {t('TokensPage.9gyvbcuo')} </p>

            <p>
              {t('TokensPage.cc813yry')} </p>

            {/* TRANSFER ANIMATION */}
            <TokenSpreadsheet
              mode="transfer-animation"
              showTokens="USDC"
              caption={t('TokensPage.obg0emhb')}
            />

            <p>
              <Trans i18nKey="TokensPage.jb8axe00" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              {t('TokensPage.f07ji1p4')} </p>

            <p>
              {t('TokensPage.2dpjh24a')} </p>

            <p>
              <Trans i18nKey="TokensPage.zxk0qd25" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            <p>
              <Trans i18nKey="TokensPage.ki366lip" components={{ Vocab: <Vocab>{null}</Vocab> }} />
            </p>

            {/* BANK MINT VS BURN */}
            <div className="my-8">
              <MintBurnAnimation />
            </div>

            <p>
              {t('TokensPage.u3fcthvl')} </p>

            <p>
              {t('TokensPage.a9ivk0qd')} </p>

            <p>
              {t('TokensPage.197de72s')} </p>

            <p>
              {t('TokensPage.slaxvdj7')} </p>

            <p>
              {t('TokensPage.pc209rik')} </p>
              

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
