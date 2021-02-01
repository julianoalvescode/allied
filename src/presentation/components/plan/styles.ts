import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;

  .content-product {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    cursor: default;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 5px 15px 0 rgba(2, 2, 2, 0.15);
    border-radius: 4px;
    padding: 15px 0 20px 0;
    position: relative;
    width: 100%;
    margin: 0 auto;
    border: solid 2px #fff;

    ::after {
      display: table;
      clear: both;
      content: "";
    }

    :hover {
      border-color: #ff6700;
    }
  }

  .details {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: default;
    width: 100%;
  }

  .stamp-offer {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    cursor: default;
    border-radius: 2.38px;
    height: 26px;
    margin: -30px auto 4px auto;
    position: relative;
    width: fit-content;
    padding: 0 14px;
    min-width: 162px;
  }

  .currency {
    position: relative;
    bottom: -19px;
    margin-right: 5px;
  }

  .plan {
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    cursor: default;
    margin: 0 0 10px;
    color: inherit;
    font-style: inherit;
    font-weight: bold;
    text-align: inherit;
    text-decoration: inherit;
    font-size: 40px;
    padding: 0;
    line-height: 1;
    margin-bottom: 30px;
    margin-top: 30px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(253deg, #fb851c, #f8562c);
    display: inline-block;
  }

  .desc_franqui_espacamento {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: default;
    height: 10px;
  }

  .separator {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    border: 0.5px dashed #bababa;
    margin: 0 auto;
    clear: both;
    width: 80%;
  }

  .ligacoes-ilimitadas {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: default;
  }

  .Ilimitadas {
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    font-style: inherit;
    font-weight: normal;
    text-align: inherit;
    text-decoration: inherit;
    font-size: 16px;
    line-height: 16px;
    margin: 10px 0;
    color: #222;
  }

  .digital-content {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    min-height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    height: 177px;
    align-items: center;
  }

  .digital-content-collection-apps-icon {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: default;
    width: 255px;
    height: 82px;
    padding-top: 10px;
    padding-bottom: 21px;
    display: flex;
    flex-direction: column;
  }

  .link {
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    color: inherit;
    font-style: inherit;
    line-height: 150%;
    text-align: inherit;
    text-decoration: inherit;
    font-size: 14px;
    margin: 0;
    font-weight: bold;
  }

  .IconBlack {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    height: auto;
    margin: 0 auto 0;
    display: inline-block;
    max-width: 260px;
  }

  .oi-addDependentes {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    cursor: default;
    overflow: hidden;
    padding: 0 0;
    margin-bottom: 5px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .semDependentes {
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    font-style: inherit;
    font-weight: normal;
    text-decoration: inherit;
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #f8562c;
    background: none;
    margin-left: 0;
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
  }

  .price-details {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    margin: 10px auto 0;
    width: 152px;
  }

  .price {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    overflow: hidden;
    width: auto;
  }

  .little {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    line-height: 150%;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: default;
    float: left;
    width: auto;
  }

  .total-integer {
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    color: inherit;
    font-style: inherit;
    text-align: inherit;
    text-decoration: inherit;
    float: left;
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    line-height: 46px;
    margin-right: 5px;
  }

  .total-float {
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    margin: 0 0 10px;
    color: inherit;
    font-style: inherit;
    font-weight: normal;
    text-align: inherit;
    text-decoration: inherit;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 0;
  }

  .sprite-social-icons {
    -webkit-font-smoothing: antialiased;
    color: #333;
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-align: center;
    line-height: 1;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    list-style: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    min-height: 32px;
    float: none !important;
    display: inline-flex;
  }

  .type-purchase {
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-weight: normal;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    cursor: default;
    line-height: 1;
    color: #222;
    margin-bottom: 12px;
    text-align: center;
    display: block;
    font-size: 16px;
  }

  .btn {
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    background: transparent;
    outline: 0;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 6px 12px;
    user-select: none;
    height: 48px;
    border-radius: 4px !important;
    line-height: 2;
    text-align: center;
    color: #222;
    display: block;
    font-weight: bold;
    font-size: 16px;
    background-color: #ffd700;
    transition: background-image 500ms ease;
    border: none;
    width: 152px;
    margin: 0 auto 10px;
    min-width: 44%;
  }

`
