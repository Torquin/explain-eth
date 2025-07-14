import React, { useState, useEffect } from 'react'
import { Recipient } from '../types/blockchain'
import { getRecipientEmoji } from '../utils/recipients'
import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next';

interface CharacterDialogueProps {
  character: Recipient
  balance: number
  isVisible: boolean
  onComplete: () => void
  className?: string
}

// Dialogue data based on personality and wealth levels
const dialogueData = (t: TFunction): Record<Recipient, {
  personality: string
  dialogues: {
    broke: string[]
    poor: string[]
    comfortable: string[]
    wealthy: string[]
  }
}> => ({
  Alice: {
    personality: 'funny',
    dialogues: {
      broke: [
        t('Characters.alice_b1'),
        t('Characters.alice_b2'),
        t('Characters.alice_b3'),
        t('Characters.alice_b4'),
      ],
      poor: [
        t('Characters.alice_p1'),
        t('Characters.alice_p2'),
        t('Characters.alice_p3'),
        t('Characters.alice_p4'),
      ],
      comfortable: [
        t('Characters.alice_c1'),
        t('Characters.alice_c2'),
        t('Characters.alice_c3'),
        t('Characters.alice_c4'),
      ],
      wealthy: [
        t('Characters.alice_w1'),
        t('Characters.alice_w2'),
        t('Characters.alice_w3'),
        t('Characters.alice_w4'),
      ],
    },
  },
  Bob: {
    personality: 'serious',
    dialogues: {
      broke: [
        t('Characters.bob_b1'),
        t('Characters.bob_b2'),
        t('Characters.bob_b3'),
        t('Characters.bob_b4'),
      ],
      poor: [
        t('Characters.bob_p1'),
        t('Characters.bob_p2'),
        t('Characters.bob_p3'),
        t('Characters.bob_p4'),
      ],
      comfortable: [
        t('Characters.bob_c1'),
        t('Characters.bob_c2'),
        t('Characters.bob_c3'),
        t('Characters.bob_c4'),
      ],
      wealthy: [
        t('Characters.bob_w1'),
        t('Characters.bob_w2'),
        t('Characters.bob_w3'),
        t('Characters.bob_w4'),
      ],
    },
  },
  Carol: {
    personality: 'miserly',
    dialogues: {
      broke: [
        t('Characters.carol_b1'),
        t('Characters.carol_b2'),
        t('Characters.carol_b3'),
        t('Characters.carol_b4'),
      ],
      poor: [
        t('Characters.carol_p1'),
        t('Characters.carol_p2'),
        t('Characters.carol_p3'),
        t('Characters.carol_p4'),
      ],
      comfortable: [
        t('Characters.carol_c1'),
        t('Characters.carol_c2'),
        t('Characters.carol_c3'),
        t('Characters.carol_c4'),
      ],
      wealthy: [
        t('Characters.carol_w1'),
        t('Characters.carol_w2'),
        t('Characters.carol_w3'),
        t('Characters.carol_w4'),
      ],
    },
  },
  Eve: {
    personality: 'mysterious',
    dialogues: {
      broke: [
        t('Characters.eve_b1'),
        t('Characters.eve_b2'),
        t('Characters.eve_b3'),
        t('Characters.eve_b4'),
      ],
      poor: [
        t('Characters.eve_p1'),
        t('Characters.eve_p2'),
        t('Characters.eve_p3'),
        t('Characters.eve_p4'),
      ],
      comfortable: [
        t('Characters.eve_c1'),
        t('Characters.eve_c2'),
        t('Characters.eve_c3'),
        t('Characters.eve_c4'),
      ],
      wealthy: [
        t('Characters.eve_w1'),
        t('Characters.eve_w2'),
        t('Characters.eve_w3'),
        t('Characters.eve_w4'),
      ],
    },
  },
  Splitter: {
    personality: 'mysterious',
    dialogues: {
      broke: [],
      poor: [],
      comfortable: [],
      wealthy: []
    }
  }
})

type WealthLevel = 'broke' | 'poor' | 'comfortable' | 'wealthy';

const getWealthLevel = (balance: number): WealthLevel => {
  if (balance === 0) return 'broke';
  if (balance < 0.1) return 'poor';
  if (balance < 0.5) return 'comfortable';
  return 'wealthy';
}

const getRandomDialogue = (character: Recipient, balance: number, t: TFunction): string => {
  const dialogueDataWithT = dialogueData(t);  // use function with t
  const wealthLevel = getWealthLevel(balance)
  const characterData = dialogueDataWithT[character]
  
  if (!characterData) return "Hello there!"
  
  const dialogues = characterData.dialogues[wealthLevel]
  return dialogues[Math.floor(Math.random() * dialogues.length)]
}

const CharacterDialogue: React.FC<Omit<CharacterDialogueProps, 't'>> = ({
  character,
  balance,
  isVisible,
  onComplete,
  className = ''
}) => {
  const { t } = useTranslation();  // get t here

  const [dialogue, setDialogue] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setDialogue(getRandomDialogue(character, balance, t))  // pass t here
      setIsAnimating(true)

      const timer = setTimeout(() => {
        setIsAnimating(false)
        setTimeout(() => {
          onComplete()
        }, 300)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [character, balance, isVisible, onComplete, t])  // include t in deps

  if (!isVisible) return null

  return (
    <div className={`absolute z-50 ${className}`}>
      {/* Speech Bubble */}
      <div
        className={`
          relative bg-gray-800 text-gray-100 rounded-lg shadow-xl p-4 max-w-sm w-80 border border-gray-600
          transition-all duration-300 ease-in-out transform
          ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}
        `}
      >
        {/* Speech Bubble Tail */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-800"></div>
        </div>

        {/* Character Emoji */}
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-lg">{getRecipientEmoji(character)}</div>
          <div className="text-sm font-semibold text-gray-200">{character}</div>
        </div>

        {/* Dialogue Text */}
        <p className="text-sm text-gray-100 leading-relaxed">{dialogue}</p>
      </div>
    </div>
  )
}

export default CharacterDialogue
