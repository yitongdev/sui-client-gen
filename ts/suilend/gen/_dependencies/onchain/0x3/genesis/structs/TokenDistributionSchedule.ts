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
import { TokenAllocation as TokenAllocation1 } from "./TokenAllocation.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTokenDistributionSchedule(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::genesis::TokenDistributionSchedule`;
}

export interface TokenDistributionScheduleFields {
  stakeSubsidyFundMist: ToField<"u64">;
  allocations: ToField<Vector<TokenAllocation1>>;
}

export type TokenDistributionScheduleReified = Reified<
  TokenDistributionSchedule,
  TokenDistributionScheduleFields
>;

/**
 * Move struct: `TokenDistributionSchedule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::genesis`
 */
export class TokenDistributionSchedule implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::genesis::TokenDistributionSchedule`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = TokenDistributionSchedule.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::genesis::TokenDistributionSchedule`;
  readonly $typeArgs: [];
  readonly $isPhantom = TokenDistributionSchedule.$isPhantom;

  readonly stakeSubsidyFundMist: ToField<"u64">;
  readonly allocations: ToField<Vector<TokenAllocation1>>;

  private constructor(typeArgs: [], fields: TokenDistributionScheduleFields) {
    this.$fullTypeName = composeSuiType(
      TokenDistributionSchedule.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::genesis::TokenDistributionSchedule`;
    this.$typeArgs = typeArgs;

    this.stakeSubsidyFundMist = fields.stakeSubsidyFundMist;
    this.allocations = fields.allocations;
  }

  static reified(): TokenDistributionScheduleReified {
    return {
      typeName: TokenDistributionSchedule.$typeName,
      fullTypeName: composeSuiType(
        TokenDistributionSchedule.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::genesis::TokenDistributionSchedule`,
      typeArgs: [] as [],
      isPhantom: TokenDistributionSchedule.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        TokenDistributionSchedule.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TokenDistributionSchedule.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => TokenDistributionSchedule.fromBcs(data),
      bcs: TokenDistributionSchedule.bcs,
      fromJSONField: (field: any) =>
        TokenDistributionSchedule.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        TokenDistributionSchedule.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TokenDistributionSchedule.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TokenDistributionSchedule.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        TokenDistributionSchedule.fetch(client, id),
      new: (fields: TokenDistributionScheduleFields) => {
        return new TokenDistributionSchedule([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenDistributionSchedule.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<TokenDistributionSchedule>> {
    return phantom(TokenDistributionSchedule.reified());
  }
  static get p() {
    return TokenDistributionSchedule.phantom();
  }

  static get bcs() {
    return bcs.struct("TokenDistributionSchedule", {
      stake_subsidy_fund_mist: bcs.u64(),
      allocations: bcs.vector(TokenAllocation1.bcs),
    });
  }

  static fromFields(fields: Record<string, any>): TokenDistributionSchedule {
    return TokenDistributionSchedule.reified().new({
      stakeSubsidyFundMist: decodeFromFields(
        "u64",
        fields.stake_subsidy_fund_mist,
      ),
      allocations: decodeFromFields(
        reified.vector(TokenAllocation1.reified()),
        fields.allocations,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): TokenDistributionSchedule {
    if (!isTokenDistributionSchedule(item.type)) {
      throw new Error("not a TokenDistributionSchedule type");
    }

    return TokenDistributionSchedule.reified().new({
      stakeSubsidyFundMist: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_fund_mist,
      ),
      allocations: decodeFromFieldsWithTypes(
        reified.vector(TokenAllocation1.reified()),
        item.fields.allocations,
      ),
    });
  }

  static fromBcs(data: Uint8Array): TokenDistributionSchedule {
    return TokenDistributionSchedule.fromFields(
      TokenDistributionSchedule.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      stakeSubsidyFundMist: this.stakeSubsidyFundMist.toString(),
      allocations: fieldToJSON<Vector<TokenAllocation1>>(
        `vector<${TokenAllocation1.$typeName}>`,
        this.allocations,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): TokenDistributionSchedule {
    return TokenDistributionSchedule.reified().new({
      stakeSubsidyFundMist: decodeFromJSONField(
        "u64",
        field.stakeSubsidyFundMist,
      ),
      allocations: decodeFromJSONField(
        reified.vector(TokenAllocation1.reified()),
        field.allocations,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): TokenDistributionSchedule {
    if (json.$typeName !== TokenDistributionSchedule.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return TokenDistributionSchedule.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): TokenDistributionSchedule {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTokenDistributionSchedule(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TokenDistributionSchedule object`,
      );
    }
    return TokenDistributionSchedule.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): TokenDistributionSchedule {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTokenDistributionSchedule(data.bcs.type)
      ) {
        throw new Error(`object at is not a TokenDistributionSchedule object`);
      }

      return TokenDistributionSchedule.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TokenDistributionSchedule.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<TokenDistributionSchedule> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TokenDistributionSchedule object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTokenDistributionSchedule(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a TokenDistributionSchedule object`,
      );
    }

    return TokenDistributionSchedule.fromSuiObjectData(res.data);
  }
}
