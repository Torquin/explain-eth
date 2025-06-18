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
              <h1 className="text-4xl font-bold text-white mb-8">{t('AppsPage.apps')}</h1>

              <p>
                {t('AppsPage.an-app-on-ethereum-is-a-program-that-can-also-send-or-receive-eth')} <Vocab>{t('AppsPage.according-to-its-own-rules')}</Vocab>.
              </p>

              <p>
                {t('AppsPage.in-blockchain-jargon-this-type-of-program-is-called-a')}{" "}
                <Vocab>{t('AppsPage.smart-contract')}</Vocab>.
              </p>

              <p>
                {t('AppsPage.what-do-these-programs-look-like')} </p>

              <p>
                {t('AppsPage.what-kinds-of-rules-can-we-set')} </p>

              <p>
                {t('AppsPage.how-can-they-be-useful')} </p>

              <p>
                <i>
                  {t('AppsPage.when-will-i-stop-with-these-hackneyed-rhetorical-questions')} </i>
              </p>

              <p>
                {t('AppsPage.okay-okay-lets-get-back-to-an-example')} </p>

              <p>
                {t('AppsPage.remember-that-example-earlier-where-we-had-to-pay-alice-bob')},{" "}
                <em>and</em> {t('AppsPage.carol-one-at-a-time-sending-money-to-all-three-of-them-took-several-button-clicks')} </p>

              <p>
                {t('AppsPage.what-if-we-could-automate-that-to-just-one-click')} </p>

              <p className="mb-8">
                {t('AppsPage.lets-look-at-a-simplified-smart-contract')}
                <FootnoteRef id="contract">
                  {t('AppsPage.this-is-a-simplified-example-that-doesnt-use-real-code-of-course-to-learn-more-check-out')}{" "}
                  <a
                    href="https://docs.soliditylang.org/en/v0.8.30/introduction-to-smart-contracts.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {t('AppsPage.solidity')} </a>
                  {t('AppsPage.a-programming-language-used-to-write-smart-contracts-on-ethereum')} </FootnoteRef>
                :
              </p>

              {/* Payment Splitter Code Block */}
              <div className="my-12">
                <CodeBlock
                  title="PaymentSplitter.sol"
                  code={`PAYMENT SPLITTER PROGRAM

WHENEVER THIS PROGRAM RECEIVES ETH:
  SEND 33% TO ${getRecipientEmoji('Alice')} ALICE (${getRecipientAddressTruncated('Alice')}),
  AND SEND 33% TO ${getRecipientEmoji('Bob')} BOB (${getRecipientAddressTruncated('Bob')}),
  AND SEND 33% TO ${getRecipientEmoji('Carol')} CAROL (${getRecipientAddressTruncated('Carol')})
END`}
                  className="max-w-2xl mx-auto"
                />
              </div>

              <p>
                {t('AppsPage.what-does-it-do')} </p>

              <p>
                {t('AppsPage.if-you-havent-read-or-written-code-before-dont-worry-just-try-to-read-the-above-text-like-a-formal-agreement-or-a-specific-formula-and-see-if-it-makes-some-sense')} </p>

              <p>
                {t('AppsPage.its-a-payment-splitter')} </p>

              <p>
                {t('AppsPage.that-means-it-splits-payments')} </p>

              <p>
                😑
              </p>

              <p>
                {t('AppsPage.in-other-words-it-means-whenever-our-payment-splitter-smart-contract-receives-eth-itll-automatically-send-the-right-proportion-1-3-to-each-person')} </p>

              <p>
                {t('AppsPage.now-we-can-use-this-simple-program-to-send-money-to-everyone-at-once-instead-of-individually-sending-everyone-eth-one-at-a-time')} </p>

              <p>
                {t('AppsPage.how-do-we-run-this-program')} </p>

              <p>
                {t('AppsPage.on-ethereum-all-smart-contracts-have-their-own-address-to-run-this-program-we-just-send-eth-to-its-address-so-its-a-transaction-just-like-how-sending-eth-to-alice-bob-or-carol-is-also-a-transaction')} </p>

              <p>
                {t('AppsPage.once-the-program-receives-eth-itll-automatically-do-its-job-and-split-the-funds-three-ways-between-alice-bob-and-carol-as-part-of-the-same-transaction')} </p>

              {/* Split Animation */}
              <div className="my-12">
                <SplitAnimation />
              </div>

              <p>
                {t('AppsPage.here-give-it-a-try-yourself')} </p>

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
                {t('AppsPage.because-the-split-amounts-are-coded-up-its-also-very-easy-to-change-them')} </p>

              <p>
                {t('AppsPage.lets-say-that-alice-bob-and-carol-all-baked-cookies-for-a-bake-sale')} </p>

              <p>
                {t('AppsPage.alice-has-baked-half-of-all-the-cookies-and-bob-and-carol-each-baked-a-quarter-lets-say-they-take-sales-in-eth-so-they-tell-everyone-to-send-them-money-to-a-payment-splitter-smart-contract')} </p>

              {/* COOKIE DIAGRAM */}

              <p>
                {t('AppsPage.how-can-we-change-the-payment-splitter-program-to-instead-send-50-to-alice-25-to-bob-and-25-to-carol')} </p>

              <p>
                {t('AppsPage.all-we-need-to-do-is-change-the-percentages-we-had-for-each-person-in-our-smart-contract')} </p>

              {/* Payment Splitter Code Block with Animation */}
              <div className="my-12">
                <CodeBlock
                  title="PaymentSplitter2.sol"
                  code={`PAYMENT SPLITTER 2 PROGRAM

WHENEVER THIS PROGRAM RECEIVES ETH:
  SEND 3̶3̶% 50% TO ${getRecipientEmoji('Alice')} ALICE (${getRecipientAddressTruncated('Alice')}),
  AND SEND 3̶3̶% 25% TO ${getRecipientEmoji('Bob')} BOB (${getRecipientAddressTruncated('Bob')}),
  AND SEND 3̶3̶% 25% TO ${getRecipientEmoji('Carol')} CAROL (${getRecipientAddressTruncated('Carol')})
END`}
                  className="max-w-2xl mx-auto"
                />
              </div>

              <p>
                {t('AppsPage.we-change-the-33-for-alice-to-50-and-the-33-for-bob-and-carol-to-25')} </p>

              <p>
                {t('AppsPage.now-when-we-send-eth-to-this-new-payment-splitter-it-automatically-splits-the-funds-50-25-25-between-alice-bob-and-carol')} </p>

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
                {t('AppsPage.this-is-just-the-tip-of-the-iceberg-there-are-many-other-types-of-smart-contracts-we-could-write-to-handle-even-more-complex-types-of-payments')} </p>

              <p>
                {t('AppsPage.for-example-we-could-have')} </p>

              {/* Smart Contract Capabilities List */}
              <div className="text-gray-300 leading-relaxed mb-6">
                {/* Variable Split */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-blue-300">{t('AppsPage.variable-split')}:</span> {t('AppsPage.change-the-split-proportions-we-already-saw-this-one')}
                    </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.variable-split')} />
                  </div>
                </div>

                {/* Dynamic Recipients */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-green-300">{t('AppsPage.dynamic-recipients')}:</span>{" "}
                      {t('AppsPage.add-or-remove-recipients-e-g-remove-carol-or-we-could-add-eve')} </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.dynamic-recipients')} />
                  </div>
                </div>

                {/* Fee Flow */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-yellow-300">{t('AppsPage.fee-flow')}:</span> {t('AppsPage.charge-a-processing-fee-e-g-send-1-to-ourselves-then-pass-the-rest-along')} </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.fee-flow')} />
                  </div>
                </div>

                {/* Betting */}
                <div className="mb-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <div className="flex-1 text">
                      <span className="text-purple-300">{t('AppsPage.betting')}:</span> {t('AppsPage.take-in-money-from-2-people-and-pay-it-out-to-1-person-e-g-to-settle-a-bet')}
                    </div>
                  </div>
                  {/* Mobile-only quadrant */}
                  <div className="mt-4 md:hidden">
                    <AppsAbstractQuadrant quadrantType={t('AppsPage.betting')} />
                  </div>
                </div>
              </div>

              {/* Desktop-only Abstract Quadrant Animation */}
              <div className="my-12 hidden md:block">
                <AppsAbstractQuadrant />
              </div>

              <p>
                {t('AppsPage.all-of-this-can-let-us-make-very-flexible-and-customizable-programs-to-handle-payments')} </p>

              <p>
                {t('AppsPage.lets-go-back-to-the-bake-sale-example-for-a-second-in-an-ideal-world-we-can-sell-cookies-to-people-for-eth')} </p>

              <p>
                {t('AppsPage.in-the-real-world-however-most-people-wont-own-eth-they-may-not-even-know-how-to-buy-it-but-almost-everyone-will-have-us-dollars-in-some-shape-or-form-cash-credit-debit-etc')} </p>

              <p>
                {t('AppsPage.can-the-ethereum-network-handle-dollars')} </p>

              <p>
                Yes!
              </p>

              <p>
                {t('AppsPage.as-i-mentioned-at-the-very-beginning-we-can-use-all-sorts-of-currencies-on-the-ethereum-network-including-digital-dollars')} </p>

              <p>
                {t('AppsPage.lets-explore-the-basics-of')} <Vocab>{t('AppsPage.tokens')}</Vocab>...
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
