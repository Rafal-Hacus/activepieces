import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { extractText } from './lib/actions/extract-text';
import { convertPdfToImages } from './lib/actions/convert-pdf-to-images';

export const PDF = createPiece({
  displayName: 'PDF',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/pdf.svg',
  authors: ['nyamkamunhjin', 'abuaboud'],
  actions: [extractText, convertPdfToImages],
  triggers: [],
});
