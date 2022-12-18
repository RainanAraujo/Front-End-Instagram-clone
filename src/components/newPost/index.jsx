import { ArrowLeft, X } from "phosphor-react";
import {
  Container,
  SelectMedia,
  Content,
  AddDescriptions,
  ButtonClose,
  Header,
  Preview,
  ContentDescription,
} from "./styles";
import Avatar from "../../assets/images/avatar.jpg";
import { useEffect, useState } from "react";

export default function NewPost({ visible, onClose }) {
  const [step, setStep] = useState(0);
  const [postData, setPostData] = useState({ media: [], description: "" });

  // useEffect(() => {
  //   setStep(0);
  // }, []);

  const HeaderStep = ({ title, rightLabel = "Avançar", rightAction }) => {
    return (
      <Header>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)}>
            <ArrowLeft size={22} />
          </button>
        )}
        <span className="title">{title}</span>
        {step > 0 && (
          <button
            className="next"
            onClick={() => {
              setStep(step + 1);
              rightAction();
            }}
          >
            {rightLabel}
          </button>
        )}
      </Header>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <HeaderStep title="Criar nova publicação" />
            <SelectMedia>
              <div className="content">
                <span>Arraste as fotos e os videos aqui</span>
                <div className="inputFile">
                  <input
                    type="file"
                    multiple={false}
                    onChange={(e) => (
                      setPostData({ ...postData, media: e.target.files }),
                      setStep(1)
                    )}
                  />
                  Selecionar do computador
                </div>
              </div>
            </SelectMedia>
          </>
        );
      case 1:
        return (
          <>
            <HeaderStep title="Pré-visualização" />
            <div className="content">
              <img src={URL.createObjectURL(postData.media[0])} alt="" />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <HeaderStep
              title="Criar nova publicação"
              rightLabel="Compartilhar"
              rightAction={() => onClose()}
            />
            <ContentDescription>
              <img src={URL.createObjectURL(postData.media[0])} alt="" />

              <div className="details">
                <div className="avatar">
                  <img src={Avatar} alt="" />
                  <span>user_monitoria</span>
                </div>
                <textarea placeholder="Escreva uma legenda..." />
              </div>
            </ContentDescription>
          </>
        );
      default:
        <></>;
    }
  };

  return (
    visible && (
      <Container>
        <ButtonClose onClick={() => onClose()}>
          <X size={24} weight={"bold"} />
        </ButtonClose>
        <Content>
          <Preview>{renderStep()}</Preview>
        </Content>
      </Container>
    )
  );
}
