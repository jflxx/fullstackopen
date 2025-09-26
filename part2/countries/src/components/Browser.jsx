const Browser = ({browser,onChangeBrowser}) => {

    return (<div>
        find countries <input value={browser} onChange={onChangeBrowser} />
      </div>)


}


export default Browser;