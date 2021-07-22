import React from 'react';
import { useRouter } from 'next/router'

import ResultMatchForm from '~/components/ResultMatchForm';
import H1 from '~/components/H1';

const registMatchResult = () => {
    const router = useRouter()
    const battleFormat = router.query.battleFormat;
    const battleFormatName = battleFormat === "League" ? "予選" : "トーナメント";
    const title = battleFormatName + " の対戦結果を登録します。";

    return (
        <>
            <H1 title={title} />
            <ResultMatchForm battleFormat={battleFormat}/>
        </>
      );
}

export default registMatchResult;