import React from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import PeripheryGiveCategoriesGraphTable from '../PeripheryGiveCategories/PeripheryGiveCategoriesGraphTable'
import PeripheryGiveCategoriesHeadPhone from '../PeripheryGiveCategories/PeripheryGiveCategoriesHeadPhone'
import PeripheryGiveCategoriesKeyboard from '../PeripheryGiveCategories/PeripheryGiveCategoriesKeyboard'
import PeripheryGiveCategoriesMicrophone from '../PeripheryGiveCategories/PeripheryGiveCategoriesMicrophone'
import PeripheryGiveCategoriesMouse from '../PeripheryGiveCategories/PeripheryGiveCategoriesMouse'
import PeripheryGiveCategoriesAudioSpeaker from '../PeripheryGiveCategories/PeripheryGiveCategoriesAudioSpeaker'
import PeripheryGiveCategoriesWebcamera from '../PeripheryGiveCategories/PeripheryGiveCategoriesWebCamera'
import PeripheryGiveCategoriesRug from '../PeripheryGiveCategories/PeripheryGiveCategoriesRug'



export default function PeripheryCategoriesGiver({info, handleOpenSizeInterface,giveSize,sortRugsFromBrand,handleRugSort, handleOpenPriceInterface, givePrice, handleOpenBrandInterface, giveBrand}) {
  return (
    <>
        {
            info === 'Rug' && <PeripheryGiveCategoriesRug handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'GraphTable' && <PeripheryGiveCategoriesGraphTable handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'HeadPhone' && <PeripheryGiveCategoriesHeadPhone handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'Keyboard' && <PeripheryGiveCategoriesKeyboard handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'Microphone' && <PeripheryGiveCategoriesMicrophone handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'Mouse' && <PeripheryGiveCategoriesMouse handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'AudioSpeaker' && <PeripheryGiveCategoriesAudioSpeaker handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
        {
            info === 'WebCamera' && <PeripheryGiveCategoriesWebcamera handleOpenSizeInterface={handleOpenSizeInterface} giveSize={giveSize} sortRugsFromBrand={sortRugsFromBrand} handleRugSort={handleRugSort} handleOpenPriceInterface={handleOpenPriceInterface} givePrice={givePrice} handleOpenBrandInterface={handleOpenBrandInterface} giveBrand={giveBrand}/>
        }
    </>
    )
}
