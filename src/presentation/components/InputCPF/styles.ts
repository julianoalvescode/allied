import styled from 'styled-components'



export const Container = styled.div`
  display: flex;

  .prefix-span {
    padding: 6px 12px;
    font-size: 14px;
    color: #555;
    background-color: #eee;
    border: 1px solid #ccc;
  }

  input {
    flex: 1;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 2px 4px 4px 0;
  }

  .prefix-span {
    border-right: 0;
    border-radius: 4px 0 0 4px;
  }

  .input-group {
    margin-top: 10px;
  }

`
