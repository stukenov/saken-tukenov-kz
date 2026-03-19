export interface Model {
  id: string;
  name: string;
  slug: string;
  params: string;
  architecture: string;
  trainingData: string;
  huggingfaceUrl: string;
  featured: boolean;
}

export const models: Model[] = [
  {
    id: "600m",
    name: "sozkz-core-llama-600m-kk-base-v1",
    slug: "sozkz-core-llama-600m",
    params: "600M",
    architecture: "Llama",
    trainingData: "9B tokens",
    huggingfaceUrl: "https://huggingface.co/stukenov/sozkz-core-llama-600m-kk-base-v1",
    featured: true,
  },
  {
    id: "300m",
    name: "sozkz-moe-mix-3b-kk-base-v1",
    slug: "sozkz-moe-mix-3b",
    params: "300M",
    architecture: "Mixtral MoE",
    trainingData: "5B tokens",
    huggingfaceUrl: "https://huggingface.co/stukenov/sozkz-moe-mix-3b-kk-base-v1",
    featured: true,
  },
  {
    id: "150m",
    name: "sozkz-core-llama-150m-kk-base-v1",
    slug: "sozkz-core-llama-150m",
    params: "150M",
    architecture: "Llama",
    trainingData: "3B tokens",
    huggingfaceUrl: "https://huggingface.co/stukenov/sozkz-core-llama-150m-kk-base-v1",
    featured: true,
  },
];

export const featuredModels = models.filter((m) => m.featured);
