import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Button from '@material-ui/core/Button';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        部門を選択してください
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        ここに部門のボタンを列挙します。
                        ボタンをタップすると、次のセクションへ自動で進みます。
                        選択した回戦は、ヘッダへと転機します。
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        何回戦を登録しますか？
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        QueryStringで、予選と決勝トーナメントで切り替えができるようにします。
                        部門と同様に、回戦ボタンを列挙します。
                        選択した回戦は、ヘッダへと転機します。
                    </p>
                    <Button>
                        戻る
                    </Button>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        対戦結果を入力し、登録ボタンをタップしてください。
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        チーム1　チーム2
                        1set 9 : 9
                        2set 9 : 9
                        3set 9 : 9

                        結果　2 : 0
                    </p>
                    <Button>
                        登録
                    </Button>
                    登録後はリロードして、下部の履歴へ自動で
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        登録履歴
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        登録の履歴を新しい順に最大１０件表示します。
                    </p>
                    <Button>
                        別の対戦を登録する
                    </Button>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}