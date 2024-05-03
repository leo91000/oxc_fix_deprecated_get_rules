/** @typedef {import("eslint/lib/shared/types").RuleMeta} RuleMeta */

const ESLINT_RULES_META_URL = 'https://raw.githubusercontent.com/eslint/eslint/main/docs/src/_data/rules_meta.json';

/**
 * A record of ESLint rules meta data.
 * @typedef {Record<string, RuleMeta>} RuleMetaRecord
 */

/**
 * Fetches the ESLint rules meta data from the ESLint repository.
 * @returns {Promise<RuleMetaRecord>} The ESLint rules meta data.
 */
async function fetchEslintRulesMeta() {
  const response = await fetch(ESLINT_RULES_META_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch ESLint rules meta: ${response.statusText}\n${await response.text()}`);
  }

  // @ts-expect-error Json returns unknown type
  return await response.json();
}

exports.fetchEslintRulesMeta = fetchEslintRulesMeta;

