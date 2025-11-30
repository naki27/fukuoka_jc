import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Box, Select, MenuItem, Button, TextField, CircularProgress, Fade } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from '~/components/Link';
import { motion } from 'framer-motion';

const AnimatedCheckIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="#4caf50"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
    <motion.path
      d="M9 12l2 2 4-4"
      stroke="#4caf50"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />
  </motion.svg>
);

const categories = [
  { label: '女子', value: 'female' },
  { label: '男子', value: 'male' },
  { label: '混合', value: 'mix' },
];

const ages = [
  { label: 'フリー', value: '18' },
  { label: '40歳以上', value: '40' },
];

const formats = [
  { label: '予選', value: 'league' },
  { label: '決勝', value: 'tournament' },
];

export default function UploadResultPage() {
  const [category, setCategory] = useState('female');
  const [age, setAge] = useState('18');
  const [format, setFormat] = useState('league');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [otp, setOtp] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // セッション内で認証済みか確認
    const ok = sessionStorage.getItem('uploadResultAuth') === '1';
    if (ok) setAuthenticated(true);
  }, []);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) setFile(f);
  };

  const onChooseFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) setFile(f);
  };

  const upload = async () => {
    if (!file) return setStatus('ファイルを選択してください');
    setStatus('アップロード中...');

    const filename = `result-match-${category}-${age}-${format}.pdf`;

    try {
      const res = await fetch(`/api/uploadResult?filename=${encodeURIComponent(filename)}`, {
        method: 'POST',
        headers: {
          'Content-Type': file.type || 'application/pdf',
        },
        body: file,
      });

      if (!res.ok) {
        const text = await res.text();
        setStatus(`アップロードに失敗しました: ${res.status} ${text}`);
      } else {
        const { url } = await res.json();
        setStatus('アップロード完了');
      }
    } catch (err) {
      console.error(err);
      setStatus('アップロード中にエラーが発生しました');
    }
  };

  const handleAuth = async () => {
    setStatus('認証中...');
    try {
      const res = await fetch('/api/check-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });
      const json = await res.json();
      if (json?.ok) {
        sessionStorage.setItem('uploadResultAuth', '1');
        setAuthenticated(true);
        setStatus('認証成功');
      } else {
        setStatus('ワンタイムパスワードが違います');
      }
    } catch (err) {
      console.error(err);
      setStatus('認証エラー');
    }
  };

  if (!authenticated) {
    return (
      <Container maxWidth="sm" style={{ paddingTop: 40 }}>
        <Typography variant="h5">認証が必要です。</Typography>
        <Box marginTop={2}>
          <TextField label="ワンタイムパスワード" fullWidth value={otp} onChange={(e) => setOtp(e.target.value)} />
        </Box>
        <Box marginTop={2}>
          <Button variant="contained" onClick={handleAuth}>認証</Button>
        </Box>
        <Box marginTop={2}>
          <Typography>{status}</Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ paddingTop: 24 }}>
      <Typography variant="h5">大会結果のPDFをアップロードします。</Typography>

      <Box marginTop={2}>
        <Typography>カテゴリ</Typography>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(c => (
            <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
          ))}
        </Select>
      </Box>

      <Box marginTop={2}>
        <Typography>年齢</Typography>
        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          {ages.map(a => (
            <MenuItem key={a.value} value={a.value}>{a.label}</MenuItem>
          ))}
        </Select>
      </Box>

      <Box marginTop={2}>
        <Typography>形式</Typography>
        <Select value={format} onChange={(e) => setFormat(e.target.value)}>
          {formats.map(f => (
            <MenuItem key={f.value} value={f.value}>{f.label}</MenuItem>
          ))}
        </Select>
      </Box>

      <Box
        marginTop={3}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
        onDrop={onDrop}
        style={{ border: '2px dashed #ccc', padding: 20, textAlign: 'center', background: dragOver ? '#fafafa' : 'transparent' }}
      >
        <Typography>ここにファイルをドロップ</Typography>
        <Typography>または</Typography>
        <input ref={fileInputRef} type="file" accept="application/pdf" style={{ display: 'none' }} onChange={onChooseFile} />
        <Button variant="contained" onClick={() => fileInputRef.current && fileInputRef.current.click()}>ファイルを選択</Button>
        {file && <Box marginTop={2}><Typography>選択ファイル: {file.name}</Typography></Box>}
      </Box>

      <Box marginTop={3}>
        <Button variant="contained" onClick={upload} disabled={!file || status === 'アップロード中...'}>アップロード</Button>
        <Button variant="text" onClick={() => { setFile(null); setStatus(''); }} style={{ marginLeft: 12 }}>クリア</Button>
      </Box>

      <Box marginTop={2} display="flex" alignItems="center">
        {status === 'アップロード中...' && <CircularProgress size={20} style={{ marginRight: 8, color: '#1976d2' }} />}
        {status === 'アップロード完了' && (
          <Fade in={true} timeout={500}>
            <Box style={{ marginRight: 8 }}>
              <AnimatedCheckIcon />
            </Box>
          </Fade>
        )}
        <motion.div
          key={status}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            color: status === 'アップロード完了' ? '#4caf50' : 'inherit',
            fontWeight: status === 'アップロード完了' ? 'bold' : 'normal',
          }}
        >
          {status}
        </motion.div>
      </Box>

      <Box marginTop={2}>
        <Typography variant="caption">
          アップロード先ストア: <Link href="https://vercel.com/fukuokajcs-projects/~/stores/blob/store_IjTBgl77PFZ64Mxz/browser" target="_blank" rel="noopener noreferrer">Vercel Blob Store</Link>
        </Typography>
      </Box>
    </Container>
  );
}
