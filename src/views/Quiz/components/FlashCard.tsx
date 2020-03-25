import React from 'react';
import styled from 'styled-components';
import { AlternativeGroup, AlternativeButton } from 'components/Alternatives/AlternativesStyles';

interface Props {
    answer: string;
    showFasit: boolean;
    setShowFasit: () => void;
    setHasAnswer: () => void;
}

export default function FlashCard({ answer, showFasit, setHasAnswer, setShowFasit }: Props) {
    if (!showFasit) {
        return (
            <AlternativeGroup orientation="vertical" color="primary" size="large">
                <AlternativeButton onClick={setShowFasit}>
                    VIS FASIT
                  </AlternativeButton>
            }
            </AlternativeGroup>
        );
    }

    return (
        <FasitView>
            <strong>Fasit</strong>
            <p>{answer}</p>
            <strong>Hadde du rett?</strong>
            <AlternativeGroup orientation="vertical" color="primary" size="large">
                <AlternativeButton onClick={setHasAnswer}>
                    Ja
                  </AlternativeButton>
                <AlternativeButton onClick={setHasAnswer}>
                    Nei
                </AlternativeButton>
            }
            </AlternativeGroup>
        </FasitView>
    )
}


const FasitView = styled.div`
    display:flex;
    flex-direction:column;
    strong { 
        margin: 20px 0;
    }
`

