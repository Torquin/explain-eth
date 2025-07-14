import React, { useState } from "react";
import { useBlockchainContext } from "../contexts/BlockchainContext";
import TransactionModal from "../components/TransactionModal";
import TransactionHistoryOverlay from "../components/TransactionHistoryOverlay";
import CodeBlock from "../components/CodeBlock";
import SplitAnimation from "../components/SplitAnimation";
import AppsAbstractQuadrant from "../components/AppsAbstractQuadrant";
import Navigation from "../components/Navigation";
import BalanceComponent from "../components/BalanceComponent";
import {
  FootnoteList,
  FootnoteProvider,
  FootnoteRef,
} from "../components/Footnote";
import Vocab from "../components/Vocab";
import { getRecipientEmoji, getRecipientAddressTruncated } from "../utils/recipients";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const AppsPage: React.FC = () => {
  const { t } = useTranslation();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const {
    ethereumState,
    rollupState,
    transactionHistory,
    modalState,
    currentPendingTransaction,
    closeModal,
  } = useBlockchainContext();

  return (
    <FootnoteProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            {/* Apps Section */}
            <section className="mb-16">
              <h1 className="text-4xl font-bold text-white mb-8">{t('AppsPage.co2qiguz')}</h1>

              <p>
                {t('AppsPage.pd5vqu9g')} <Vocab>{t('AppsPage.yon0zow9')}</Vocab>.
              </p>

              <p>
                {t('AppsPage.oxvj1gzg')}{" "}
                <Vocab>{t('AppsPage.h2vz1qn8')}</Vocab>.
              </p>

              <p>
                {t('AppsPage.1hu6ukuz')} </p>

              <p>
                {t('AppsPage.g4or0b0l')} </p>

              <p>
                {t('AppsPage.tyoww1e7')} </p>

              <p>
                <i>
                  {t('AppsPage.9mz5yoil')} </i>
              </p>

              <p>
                {t('AppsPage.bsu1ceau')} </p>

              <p>
                <Trans i18nKey="AppsPage.zc2jt1as" components={{ em: <em></em> }} />
              </p>

              <p>
                {t('AppsPage.yhgsubcu')} </p>

              <p className="mb-8">
                {t('AppsPage.e6ztltqq')}
                <FootnoteRef id="contract">
                  {t('AppsPage.vvw8sv8l')}{" "}
                  <a
                    href="https://docs.soliditylang.org/en/v0.8.30/introduction-to-smart-contracts.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {t('AppsPage.hb7ar1bv')} </a>
                  {t('AppsPage.h8ew1xkg')} </FootnoteRef>
                :
              </p>

              {/* Payment Splitter Code Block */}
              <div className="my-12">
                <CodeBlock
                  title="PaymentSplitter.sol"
                  code={`${t('AppsPage.tny1arl1')}

${t('AppsPage.p7d5xchm')}
  ${t('AppsPage.69keso3i')} 33% ${t('AppsPage.khv1inpf')} ${getRecipientEmoji('Alice')} ALICE (${getRecipientAddressTruncated('Alice')}),
  ${t('AppsPage.fapaosw0')} ${t('AppsPage.69keso3i')} 33% ${t('AppsPage.khv1inpf')} ${getRecipientEmoji('Bob')} BOB (${getRecipientAddressTruncated('Bob')}),
  ${t('AppsPage.fapaosw0')} ${t('AppsPage.69keso3i')} 33% ${t('AppsPage.khv1inpf')} ${getRecipientEmoji('Carol')} CAROL (${getRecipientAddressTruncated('Carol')})
${t('AppsPage.o7x8p4nx')}`}
                  className="max-w-2xl mx-auto"
                />
              </div>

              <p>
                {t('AppsPage.4qgzt4j7')} </p>

              <p>
                {t('AppsPage.g2l6yzle')} </p>

              <p>
                {t('AppsPage.7z1v9xez')} </p>

              <p>
                {t('AppsPage.4cnpuwe3')} </p>

              <p>
                😑
              </p>

              <p>
                {t('AppsPage.8jx1igub')} </p>

              <p>
                {t('AppsPage.nyqa6lup')} </p>

              <p>
                {t('AppsPage.3vq8r7vc')} </p>

              <p>
                {t('AppsPage.b41xd9y3')} </p>

              <p>
                {t('AppsPage.pyplvmqd')} </p>

              {/* Split Animation */}
              <div className="my-12">
                <SplitAnimation />
              </div>

              <p>
                {t('AppsPage.3exvhrwg')} </p>

              {/* Balance Component with Splitter */}
              <div className="my-12">
                <BalanceComponent
                  showSendAction={true}
                  allowedRecipients={['Alice', 'Bob', 'Carol']}
                  className="max-w-md mx-auto"
                  disableButtonsOnPending={true}
                  showSentCheckmarks={true}
                  componentId="apps-splitter-balance"
                  useSplitter={true}
                  splitterAmount={0.03}
                  autoInitializeETH={true}
                  showRecipientSelection={false}
                />
              </div>

              <p>
                {t('AppsPage.fd2xeybr')} </p>

              <p>
                {t('AppsPage.0exy4wpo')} </p>

              <p>
                {t('AppsPage.9clig77r')} </p>

              {/* COOKIE DIAGRAM */}

              <p>
                {t('AppsPage.n1e2bkp4')} </p>

              <p>
                {t('AppsPage.4jc9wthr')} </p>

              {/* Payment Splitter Code Block with Animation */}
              <div className="my-12">
                <CodeBlock
                  title="PaymentSplitter2.sol"
                  code={`${t('AppsPage.tny1arlq')}
${t('AppsPage.p7d5xchm')}
  ${t('AppsPage.69keso3i')} 3̶3̶% 50% ${t('AppsPage.khv1inpf')} ${getRecipientEmoji('Alice')} ALICE (${getRecipientAddressTruncated('Alice')}),
  ${t('AppsPage.fapaosw0')} ${t('AppsPage.69keso3i')} 3̶3̶% 25% ${t('AppsPage.khv1inpf')} ${getRecipientEmoji('Bob')} BOB (${getRecipientAddressTruncated('Bob')}),
  ${t('AppsPage.fapaosw0')} ${t('AppsPage.69keso3i')} 3̶3̶% 25% ${t('AppsPage.khv1inpf')} ${getRecipientEmoji('Carol')} CAROL (${getRecipientAddressTruncated('Carol')})
${t('AppsPage.o7x8p4nx')}`}
                  className="max-w-2xl mx-auto"
                />
              </div>

              <p>
                {t('AppsPage.ir7ol0xy')} </p>

              <p>
                {t('AppsPage.cmdyl7hu')} </p>

              {/* Split Animation with 50/25/25 split */}
              <div className="my-12">
                <SplitAnimation
                  alicePercent={50}
                  bobPercent={25}
                  carolPercent={25}
                  totalAmount={0.3}
                />
              </div>
            </section>

            {/* Additional Smart Contract Capabilities */}
            <section className="mb-16">
              <p>
                {t('AppsPage.0pgtzvrx')} </p>

              <p>
                {t('AppsPage.931go040')} </p>

              {/* Smart Contract Capabilities List */}
              <div className="text-gray-300 leading-relaxed mb-6">
                {/* Variable Split */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-blue-300">{t('AppsPage.d59olyrm')}:</span> {t('AppsPage.ot12zv6y')}
                    </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.d59olyrm')} />
                  </div>
                </div>

                {/* Dynamic Recipients */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-green-300">{t('AppsPage.seejn4xv')}:</span>{" "}
                      {t('AppsPage.l6cgj2fm')} </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.seejn4xv')} />
                  </div>
                </div>

                {/* Fee Flow */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-yellow-300">{t('AppsPage.ed3ubj14')}:</span> {t('AppsPage.t2pini1r')} </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.ed3ubj14')} />
                  </div>
                </div>

                {/* Betting */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-purple-300">{t('AppsPage.2lbj5kiq')}:</span> {t('AppsPage.c14l0s25')}
                    </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.2lbj5kiq')} />
                  </div>
                </div>
              </div>

              {/* Desktop-only Abstract Quadrant Animation */}
              <div className="my-12 hidden md:block">
                <AppsAbstractQuadrant />
              </div>

              <p>
                {t('AppsPage.eg46p0ga')} </p>

              <p>
                {t('AppsPage.iwck0ypz')} </p>

              <p>
                {t('AppsPage.950d1qtc')} </p>

              <p>
                {t('AppsPage.kkmj25ub')} </p>

              <p>
                {t('AppsPage.kw48qy51')}
              </p>

              <p>
                {t('AppsPage.xangcnuf')} </p>

              <p>
                {t('AppsPage.os13o1p2')} <Vocab>{t('AppsPage.kw48qy5p')}</Vocab>...
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
          ethereumTransactions={transactionHistory.filter(
            (tx) => tx.chain === "ethereum"
          )}
          rollupTransactions={transactionHistory.filter(
            (tx) => tx.chain === "rollup"
          )}
          ethereumPendingCount={ethereumState.pendingTransactions}
          rollupPendingCount={rollupState.pendingTransactions}
          isOpen={isHistoryOpen}
          onToggle={() => setIsHistoryOpen(!isHistoryOpen)}
          hideRollupTab={true}
        />
      </div>
    </FootnoteProvider>
  );
};

export default AppsPage;
