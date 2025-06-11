import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isGenesisChainParameters(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::genesis::GenesisChainParameters`;
}

export interface GenesisChainParametersFields {
  protocolVersion: ToField<"u64">;
  chainStartTimestampMs: ToField<"u64">;
  epochDurationMs: ToField<"u64">;
  stakeSubsidyStartEpoch: ToField<"u64">;
  stakeSubsidyInitialDistributionAmount: ToField<"u64">;
  stakeSubsidyPeriodLength: ToField<"u64">;
  stakeSubsidyDecreaseRate: ToField<"u16">;
  maxValidatorCount: ToField<"u64">;
  minValidatorJoiningStake: ToField<"u64">;
  validatorLowStakeThreshold: ToField<"u64">;
  validatorVeryLowStakeThreshold: ToField<"u64">;
  validatorLowStakeGracePeriod: ToField<"u64">;
}

export type GenesisChainParametersReified = Reified<
  GenesisChainParameters,
  GenesisChainParametersFields
>;

/**
 * Move struct: `GenesisChainParameters`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::genesis`
 */
export class GenesisChainParameters implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::genesis::GenesisChainParameters`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = GenesisChainParameters.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::genesis::GenesisChainParameters`;
  readonly $typeArgs: [];
  readonly $isPhantom = GenesisChainParameters.$isPhantom;

  readonly protocolVersion: ToField<"u64">;
  readonly chainStartTimestampMs: ToField<"u64">;
  readonly epochDurationMs: ToField<"u64">;
  readonly stakeSubsidyStartEpoch: ToField<"u64">;
  readonly stakeSubsidyInitialDistributionAmount: ToField<"u64">;
  readonly stakeSubsidyPeriodLength: ToField<"u64">;
  readonly stakeSubsidyDecreaseRate: ToField<"u16">;
  readonly maxValidatorCount: ToField<"u64">;
  readonly minValidatorJoiningStake: ToField<"u64">;
  readonly validatorLowStakeThreshold: ToField<"u64">;
  readonly validatorVeryLowStakeThreshold: ToField<"u64">;
  readonly validatorLowStakeGracePeriod: ToField<"u64">;

  private constructor(typeArgs: [], fields: GenesisChainParametersFields) {
    this.$fullTypeName = composeSuiType(
      GenesisChainParameters.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::genesis::GenesisChainParameters`;
    this.$typeArgs = typeArgs;

    this.protocolVersion = fields.protocolVersion;
    this.chainStartTimestampMs = fields.chainStartTimestampMs;
    this.epochDurationMs = fields.epochDurationMs;
    this.stakeSubsidyStartEpoch = fields.stakeSubsidyStartEpoch;
    this.stakeSubsidyInitialDistributionAmount =
      fields.stakeSubsidyInitialDistributionAmount;
    this.stakeSubsidyPeriodLength = fields.stakeSubsidyPeriodLength;
    this.stakeSubsidyDecreaseRate = fields.stakeSubsidyDecreaseRate;
    this.maxValidatorCount = fields.maxValidatorCount;
    this.minValidatorJoiningStake = fields.minValidatorJoiningStake;
    this.validatorLowStakeThreshold = fields.validatorLowStakeThreshold;
    this.validatorVeryLowStakeThreshold = fields.validatorVeryLowStakeThreshold;
    this.validatorLowStakeGracePeriod = fields.validatorLowStakeGracePeriod;
  }

  static reified(): GenesisChainParametersReified {
    return {
      typeName: GenesisChainParameters.$typeName,
      fullTypeName: composeSuiType(
        GenesisChainParameters.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::genesis::GenesisChainParameters`,
      typeArgs: [] as [],
      isPhantom: GenesisChainParameters.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        GenesisChainParameters.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        GenesisChainParameters.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => GenesisChainParameters.fromBcs(data),
      bcs: GenesisChainParameters.bcs,
      fromJSONField: (field: any) =>
        GenesisChainParameters.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        GenesisChainParameters.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        GenesisChainParameters.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        GenesisChainParameters.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        GenesisChainParameters.fetch(client, id),
      new: (fields: GenesisChainParametersFields) => {
        return new GenesisChainParameters([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return GenesisChainParameters.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<GenesisChainParameters>> {
    return phantom(GenesisChainParameters.reified());
  }
  static get p() {
    return GenesisChainParameters.phantom();
  }

  static get bcs() {
    return bcs.struct("GenesisChainParameters", {
      protocol_version: bcs.u64(),
      chain_start_timestamp_ms: bcs.u64(),
      epoch_duration_ms: bcs.u64(),
      stake_subsidy_start_epoch: bcs.u64(),
      stake_subsidy_initial_distribution_amount: bcs.u64(),
      stake_subsidy_period_length: bcs.u64(),
      stake_subsidy_decrease_rate: bcs.u16(),
      max_validator_count: bcs.u64(),
      min_validator_joining_stake: bcs.u64(),
      validator_low_stake_threshold: bcs.u64(),
      validator_very_low_stake_threshold: bcs.u64(),
      validator_low_stake_grace_period: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): GenesisChainParameters {
    return GenesisChainParameters.reified().new({
      protocolVersion: decodeFromFields("u64", fields.protocol_version),
      chainStartTimestampMs: decodeFromFields(
        "u64",
        fields.chain_start_timestamp_ms,
      ),
      epochDurationMs: decodeFromFields("u64", fields.epoch_duration_ms),
      stakeSubsidyStartEpoch: decodeFromFields(
        "u64",
        fields.stake_subsidy_start_epoch,
      ),
      stakeSubsidyInitialDistributionAmount: decodeFromFields(
        "u64",
        fields.stake_subsidy_initial_distribution_amount,
      ),
      stakeSubsidyPeriodLength: decodeFromFields(
        "u64",
        fields.stake_subsidy_period_length,
      ),
      stakeSubsidyDecreaseRate: decodeFromFields(
        "u16",
        fields.stake_subsidy_decrease_rate,
      ),
      maxValidatorCount: decodeFromFields("u64", fields.max_validator_count),
      minValidatorJoiningStake: decodeFromFields(
        "u64",
        fields.min_validator_joining_stake,
      ),
      validatorLowStakeThreshold: decodeFromFields(
        "u64",
        fields.validator_low_stake_threshold,
      ),
      validatorVeryLowStakeThreshold: decodeFromFields(
        "u64",
        fields.validator_very_low_stake_threshold,
      ),
      validatorLowStakeGracePeriod: decodeFromFields(
        "u64",
        fields.validator_low_stake_grace_period,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): GenesisChainParameters {
    if (!isGenesisChainParameters(item.type)) {
      throw new Error("not a GenesisChainParameters type");
    }

    return GenesisChainParameters.reified().new({
      protocolVersion: decodeFromFieldsWithTypes(
        "u64",
        item.fields.protocol_version,
      ),
      chainStartTimestampMs: decodeFromFieldsWithTypes(
        "u64",
        item.fields.chain_start_timestamp_ms,
      ),
      epochDurationMs: decodeFromFieldsWithTypes(
        "u64",
        item.fields.epoch_duration_ms,
      ),
      stakeSubsidyStartEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_start_epoch,
      ),
      stakeSubsidyInitialDistributionAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_initial_distribution_amount,
      ),
      stakeSubsidyPeriodLength: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_period_length,
      ),
      stakeSubsidyDecreaseRate: decodeFromFieldsWithTypes(
        "u16",
        item.fields.stake_subsidy_decrease_rate,
      ),
      maxValidatorCount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.max_validator_count,
      ),
      minValidatorJoiningStake: decodeFromFieldsWithTypes(
        "u64",
        item.fields.min_validator_joining_stake,
      ),
      validatorLowStakeThreshold: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_low_stake_threshold,
      ),
      validatorVeryLowStakeThreshold: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_very_low_stake_threshold,
      ),
      validatorLowStakeGracePeriod: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_low_stake_grace_period,
      ),
    });
  }

  static fromBcs(data: Uint8Array): GenesisChainParameters {
    return GenesisChainParameters.fromFields(
      GenesisChainParameters.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      protocolVersion: this.protocolVersion.toString(),
      chainStartTimestampMs: this.chainStartTimestampMs.toString(),
      epochDurationMs: this.epochDurationMs.toString(),
      stakeSubsidyStartEpoch: this.stakeSubsidyStartEpoch.toString(),
      stakeSubsidyInitialDistributionAmount:
        this.stakeSubsidyInitialDistributionAmount.toString(),
      stakeSubsidyPeriodLength: this.stakeSubsidyPeriodLength.toString(),
      stakeSubsidyDecreaseRate: this.stakeSubsidyDecreaseRate,
      maxValidatorCount: this.maxValidatorCount.toString(),
      minValidatorJoiningStake: this.minValidatorJoiningStake.toString(),
      validatorLowStakeThreshold: this.validatorLowStakeThreshold.toString(),
      validatorVeryLowStakeThreshold:
        this.validatorVeryLowStakeThreshold.toString(),
      validatorLowStakeGracePeriod:
        this.validatorLowStakeGracePeriod.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): GenesisChainParameters {
    return GenesisChainParameters.reified().new({
      protocolVersion: decodeFromJSONField("u64", field.protocolVersion),
      chainStartTimestampMs: decodeFromJSONField(
        "u64",
        field.chainStartTimestampMs,
      ),
      epochDurationMs: decodeFromJSONField("u64", field.epochDurationMs),
      stakeSubsidyStartEpoch: decodeFromJSONField(
        "u64",
        field.stakeSubsidyStartEpoch,
      ),
      stakeSubsidyInitialDistributionAmount: decodeFromJSONField(
        "u64",
        field.stakeSubsidyInitialDistributionAmount,
      ),
      stakeSubsidyPeriodLength: decodeFromJSONField(
        "u64",
        field.stakeSubsidyPeriodLength,
      ),
      stakeSubsidyDecreaseRate: decodeFromJSONField(
        "u16",
        field.stakeSubsidyDecreaseRate,
      ),
      maxValidatorCount: decodeFromJSONField("u64", field.maxValidatorCount),
      minValidatorJoiningStake: decodeFromJSONField(
        "u64",
        field.minValidatorJoiningStake,
      ),
      validatorLowStakeThreshold: decodeFromJSONField(
        "u64",
        field.validatorLowStakeThreshold,
      ),
      validatorVeryLowStakeThreshold: decodeFromJSONField(
        "u64",
        field.validatorVeryLowStakeThreshold,
      ),
      validatorLowStakeGracePeriod: decodeFromJSONField(
        "u64",
        field.validatorLowStakeGracePeriod,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): GenesisChainParameters {
    if (json.$typeName !== GenesisChainParameters.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return GenesisChainParameters.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): GenesisChainParameters {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isGenesisChainParameters(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a GenesisChainParameters object`,
      );
    }
    return GenesisChainParameters.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): GenesisChainParameters {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isGenesisChainParameters(data.bcs.type)
      ) {
        throw new Error(`object at is not a GenesisChainParameters object`);
      }

      return GenesisChainParameters.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return GenesisChainParameters.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<GenesisChainParameters> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching GenesisChainParameters object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isGenesisChainParameters(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a GenesisChainParameters object`,
      );
    }

    return GenesisChainParameters.fromSuiObjectData(res.data);
  }
}
