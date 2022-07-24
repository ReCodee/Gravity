import React from 'react'
import "./nftList.css"
import NFTCard from './NFTCard'
import SearchIcon from '@material-ui/icons/Search';
document.body.style.backgroundColor = "#000";
const nfts = []
for (let i = 0; i < 12; i++) {
  nfts.push(<li><NFTCard/></li>);
}
function NFTList() {
  return (
    <div className='nftList'> 
    <div className="header">
        <div className='explore_page_heading'>
          ALL NFTs
        </div>
        
        <div className="header__search">
            <SearchIcon color="secondary"/>
            <input type="text" placeholder="Search"style={{ fontSize: 20 }} />
        </div>
        </div>
        <div className="allNFTs">
          {nfts}
        </div>
        
    </div>
  )
}

export default NFTList