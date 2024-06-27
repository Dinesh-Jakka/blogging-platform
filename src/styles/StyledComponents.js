
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MainHeading=styled.h1`
  padding-bottom:10px;
  font-style: italic;
  text-align:center;
`

export const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BlogItem = styled.div`
  padding: 20px;
  border: 2px solid #aaa;
  background: linear-gradient(0.25turn,#fcf5b1, #ffefcf, #cfe4ff, #ffcff5);
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.12);
    box-shadow: 0 4px 8px rgba(5, 5, 5, 5);
  }
`;

export const BlogTitle = styled.h2`
  font-size: 24px;
  color: #8f7df5;
`;

export const BlogSummary = styled.p`
  font-size: 16px;
  color: #666;
`;

export const FormWrapper = styled.div`
  padding: 20px;
  border: 2px solid #444;
  border-radius: 8px;
  margin-bottom: 20px;
  background: #bbfcfc;
`;

export const FormField = styled.input`
  width: 97%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const FormTextarea = styled.textarea`
  width: 97%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background: #0073e6;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export const BlogOptionButtonsContainer = styled.div`
  display:flex;
  justify-content: space-between;
`

export const ReadMore = styled.button`
padding:5px;
`