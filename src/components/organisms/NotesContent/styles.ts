import styled from 'styled-components';

export const ContentWrapper = styled.div`
  flex: 2;
  background-color: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  outline: none;
  min-height: 28px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;

  span {
    background-color: #f2f2f7;
    color: #1c1c1e;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
  }
`;

export const LastEdited = styled.div`
  font-size: 11px;
  color: #999;
`;

export const TextArea = styled.div`
  flex: 1;
  min-height: 300px;
  padding: 12px;
  background-color: #fafafa;
  border-radius: 6px;
  outline: none;
  white-space: pre-wrap;
`;