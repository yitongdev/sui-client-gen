import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V21 } from "../../constants.js";
import { PoolTokenExchangeRate } from "../../staking-pool/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorEpochInfoEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_set::ValidatorEpochInfoEvent`;
}

export interface ValidatorEpochInfoEventFields {
  epoch: ToField<"u64">;
  validatorAddress: ToField<"address">;
  referenceGasSurveyQuote: ToField<"u64">;
  stake: ToField<"u64">;
  commissionRate: ToField<"u64">;
  poolStakingReward: ToField<"u64">;
  storageFundStakingReward: ToField<"u64">;
  poolTokenExchangeRate: ToField<PoolTokenExchangeRate>;
  tallyingRuleReporters: ToField<Vector<"address">>;
  tallyingRuleGlobalScore: ToField<"u64">;
}

export type ValidatorEpochInfoEventReified = Reified<
  ValidatorEpochInfoEvent,
  ValidatorEpochInfoEventFields
>;

/**
 * Move struct: `ValidatorEpochInfoEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_set`
 */
export class ValidatorEpochInfoEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_set::ValidatorEpochInfoEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorEpochInfoEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_set::ValidatorEpochInfoEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorEpochInfoEvent.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly validatorAddress: ToField<"address">;
  readonly referenceGasSurveyQuote: ToField<"u64">;
  readonly stake: ToField<"u64">;
  readonly commissionRate: ToField<"u64">;
  readonly poolStakingReward: ToField<"u64">;
  readonly storageFundStakingReward: ToField<"u64">;
  readonly poolTokenExchangeRate: ToField<PoolTokenExchangeRate>;
  readonly tallyingRuleReporters: ToField<Vector<"address">>;
  readonly tallyingRuleGlobalScore: ToField<"u64">;

  private constructor(typeArgs: [], fields: ValidatorEpochInfoEventFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorEpochInfoEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_set::ValidatorEpochInfoEvent`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.validatorAddress = fields.validatorAddress;
    this.referenceGasSurveyQuote = fields.referenceGasSurveyQuote;
    this.stake = fields.stake;
    this.commissionRate = fields.commissionRate;
    this.poolStakingReward = fields.poolStakingReward;
    this.storageFundStakingReward = fields.storageFundStakingReward;
    this.poolTokenExchangeRate = fields.poolTokenExchangeRate;
    this.tallyingRuleReporters = fields.tallyingRuleReporters;
    this.tallyingRuleGlobalScore = fields.tallyingRuleGlobalScore;
  }

  static reified(): ValidatorEpochInfoEventReified {
    return {
      typeName: ValidatorEpochInfoEvent.$typeName,
      fullTypeName: composeSuiType(
        ValidatorEpochInfoEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_set::ValidatorEpochInfoEvent`,
      typeArgs: [] as [],
      isPhantom: ValidatorEpochInfoEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ValidatorEpochInfoEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ValidatorEpochInfoEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorEpochInfoEvent.fromBcs(data),
      bcs: ValidatorEpochInfoEvent.bcs,
      fromJSONField: (field: any) => ValidatorEpochInfoEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ValidatorEpochInfoEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ValidatorEpochInfoEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ValidatorEpochInfoEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ValidatorEpochInfoEvent.fetch(client, id),
      new: (fields: ValidatorEpochInfoEventFields) => {
        return new ValidatorEpochInfoEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorEpochInfoEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorEpochInfoEvent>> {
    return phantom(ValidatorEpochInfoEvent.reified());
  }
  static get p() {
    return ValidatorEpochInfoEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorEpochInfoEvent", {
      epoch: bcs.u64(),
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      reference_gas_survey_quote: bcs.u64(),
      stake: bcs.u64(),
      commission_rate: bcs.u64(),
      pool_staking_reward: bcs.u64(),
      storage_fund_staking_reward: bcs.u64(),
      pool_token_exchange_rate: PoolTokenExchangeRate.bcs,
      tallying_rule_reporters: bcs.vector(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
      ),
      tallying_rule_global_score: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorEpochInfoEvent {
    return ValidatorEpochInfoEvent.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      referenceGasSurveyQuote: decodeFromFields("u64", fields.reference_gas_survey_quote),
      stake: decodeFromFields("u64", fields.stake),
      commissionRate: decodeFromFields("u64", fields.commission_rate),
      poolStakingReward: decodeFromFields("u64", fields.pool_staking_reward),
      storageFundStakingReward: decodeFromFields("u64", fields.storage_fund_staking_reward),
      poolTokenExchangeRate: decodeFromFields(
        PoolTokenExchangeRate.reified(),
        fields.pool_token_exchange_rate,
      ),
      tallyingRuleReporters: decodeFromFields(
        reified.vector("address"),
        fields.tallying_rule_reporters,
      ),
      tallyingRuleGlobalScore: decodeFromFields("u64", fields.tallying_rule_global_score),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorEpochInfoEvent {
    if (!isValidatorEpochInfoEvent(item.type)) {
      throw new Error("not a ValidatorEpochInfoEvent type");
    }

    return ValidatorEpochInfoEvent.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      validatorAddress: decodeFromFieldsWithTypes("address", item.fields.validator_address),
      referenceGasSurveyQuote: decodeFromFieldsWithTypes(
        "u64",
        item.fields.reference_gas_survey_quote,
      ),
      stake: decodeFromFieldsWithTypes("u64", item.fields.stake),
      commissionRate: decodeFromFieldsWithTypes("u64", item.fields.commission_rate),
      poolStakingReward: decodeFromFieldsWithTypes("u64", item.fields.pool_staking_reward),
      storageFundStakingReward: decodeFromFieldsWithTypes(
        "u64",
        item.fields.storage_fund_staking_reward,
      ),
      poolTokenExchangeRate: decodeFromFieldsWithTypes(
        PoolTokenExchangeRate.reified(),
        item.fields.pool_token_exchange_rate,
      ),
      tallyingRuleReporters: decodeFromFieldsWithTypes(
        reified.vector("address"),
        item.fields.tallying_rule_reporters,
      ),
      tallyingRuleGlobalScore: decodeFromFieldsWithTypes(
        "u64",
        item.fields.tallying_rule_global_score,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorEpochInfoEvent {
    return ValidatorEpochInfoEvent.fromFields(ValidatorEpochInfoEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      validatorAddress: this.validatorAddress,
      referenceGasSurveyQuote: this.referenceGasSurveyQuote.toString(),
      stake: this.stake.toString(),
      commissionRate: this.commissionRate.toString(),
      poolStakingReward: this.poolStakingReward.toString(),
      storageFundStakingReward: this.storageFundStakingReward.toString(),
      poolTokenExchangeRate: this.poolTokenExchangeRate.toJSONField(),
      tallyingRuleReporters: fieldToJSON<Vector<"address">>(
        `vector<address>`,
        this.tallyingRuleReporters,
      ),
      tallyingRuleGlobalScore: this.tallyingRuleGlobalScore.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ValidatorEpochInfoEvent {
    return ValidatorEpochInfoEvent.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      referenceGasSurveyQuote: decodeFromJSONField("u64", field.referenceGasSurveyQuote),
      stake: decodeFromJSONField("u64", field.stake),
      commissionRate: decodeFromJSONField("u64", field.commissionRate),
      poolStakingReward: decodeFromJSONField("u64", field.poolStakingReward),
      storageFundStakingReward: decodeFromJSONField("u64", field.storageFundStakingReward),
      poolTokenExchangeRate: decodeFromJSONField(
        PoolTokenExchangeRate.reified(),
        field.poolTokenExchangeRate,
      ),
      tallyingRuleReporters: decodeFromJSONField(
        reified.vector("address"),
        field.tallyingRuleReporters,
      ),
      tallyingRuleGlobalScore: decodeFromJSONField("u64", field.tallyingRuleGlobalScore),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorEpochInfoEvent {
    if (json.$typeName !== ValidatorEpochInfoEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorEpochInfoEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorEpochInfoEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorEpochInfoEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ValidatorEpochInfoEvent object`,
      );
    }
    return ValidatorEpochInfoEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorEpochInfoEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isValidatorEpochInfoEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ValidatorEpochInfoEvent object`);
      }

      return ValidatorEpochInfoEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorEpochInfoEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ValidatorEpochInfoEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ValidatorEpochInfoEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorEpochInfoEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ValidatorEpochInfoEvent object`);
    }

    return ValidatorEpochInfoEvent.fromSuiObjectData(res.data);
  }
}
